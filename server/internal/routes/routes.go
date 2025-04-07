package routes

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/deddye/odyssey/internal/structs"
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"github.com/google/uuid"
	_ "github.com/lib/pq"
)

func GetRouter(db_url string) *chi.Mux {
	log.Printf("Connecting to database with URL: %s", db_url)
	db, err := sql.Open("postgres", db_url)
	if err != nil {
		log.Fatal(err)
	}

	// Test the connection
	err = db.Ping()
	if err != nil {
		log.Printf("Error pinging database: %v", err)
	} else {
		log.Printf("Successfully connected to database")
	}

	r := chi.NewRouter()

	r.Use(cors.Handler(cors.Options{
		// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
		AllowedOrigins: []string{"https://*", "http://*"},
		// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))

	//GET REQUESTS
	r.Get("/logIn", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Header().Set("Content-Type", "application/json")
	})

	// Get messages between two users
	r.Get("/api/messages/{senderId}/{receiverId}", func(w http.ResponseWriter, r *http.Request) {
		senderID := chi.URLParam(r, "senderId")
		receiverID := chi.URLParam(r, "receiverId")

		// Query for messages between these two users
		query := `
			SELECT id, sender_id, receiver_id, message, read, created_at
			FROM direct_messages
			WHERE (sender_id = $1 AND receiver_id = $2) OR (sender_id = $2 AND receiver_id = $1)
			ORDER BY created_at ASC
		`
		rows, err := db.Query(query, senderID, receiverID)
		if err != nil {
			log.Printf("Error querying messages: %v", err)
			http.Error(w, "Error retrieving messages", http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		messages := []structs.DirectMessage{}
		for rows.Next() {
			var msg structs.DirectMessage
			err := rows.Scan(&msg.ID, &msg.SenderID, &msg.ReceiverID, &msg.Message, &msg.Read, &msg.CreatedAt)
			if err != nil {
				log.Printf("Error scanning message row: %v", err)
				continue
			}
			messages = append(messages, msg)
		}

		// Mark messages as read
		updateQuery := `
			UPDATE direct_messages
			SET read = true
			WHERE sender_id = $1 AND receiver_id = $2 AND read = false
		`
		_, err = db.Exec(updateQuery, receiverID, senderID)
		if err != nil {
			log.Printf("Error marking messages as read: %v", err)
		}

		response := structs.DirectMessagesResponse{
			Success: true,
			Data:    messages,
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
	})

	// Get conversations for a user
	r.Get("/api/conversations/{userId}", func(w http.ResponseWriter, r *http.Request) {
		userId := chi.URLParam(r, "userId")
		log.Printf("Getting conversations for user: %s", userId)

		// Test the connection again before executing the query
		err := db.Ping()
		if err != nil {
			log.Printf("Error pinging database before query: %v", err)
			http.Error(w, fmt.Sprintf("Database connection error: %v", err), http.StatusInternalServerError)
			return
		}

		// Query for the latest message with each user
		query := `
			WITH latest_messages AS (
				SELECT DISTINCT ON (
					CASE WHEN sender_id = $1 THEN receiver_id ELSE sender_id END
				)
					id, sender_id, receiver_id, message, read, created_at,
					CASE WHEN sender_id = $1 THEN receiver_id ELSE sender_id END AS other_user_id
				FROM direct_messages
				WHERE sender_id = $1 OR receiver_id = $1
				ORDER BY other_user_id, created_at DESC
			)
			SELECT lm.*, p.username, p.first_name, p.last_name, p.profile_pic_url,
				(SELECT COUNT(*) FROM direct_messages 
				 WHERE sender_id = lm.other_user_id AND receiver_id = $1 AND read = false) AS unread_count
			FROM latest_messages lm
			LEFT JOIN profiles p ON lm.other_user_id = p.id
			ORDER BY lm.created_at DESC
		`
		rows, err := db.Query(query, userId)
		if err != nil {
			log.Printf("Error querying conversations: %v", err)
			http.Error(w, "Error retrieving conversations", http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		type ConversationResponse struct {
			MessageID     string    `json:"message_id"`
			SenderID      string    `json:"sender_id"`
			ReceiverID    string    `json:"receiver_id"`
			Message       string    `json:"message"`
			Read          bool      `json:"read"`
			CreatedAt     time.Time `json:"created_at"`
			OtherUserID   string    `json:"other_user_id"`
			Username      string    `json:"username"`
			FirstName     string    `json:"first_name"`
			LastName      string    `json:"last_name"`
			ProfilePicURL string    `json:"profile_pic_url"`
			UnreadCount   int       `json:"unread_count"`
		}

		conversations := []ConversationResponse{}
		for rows.Next() {
			var conv ConversationResponse
			var username, firstName, lastName, profilePicURL sql.NullString
			err := rows.Scan(
				&conv.MessageID, &conv.SenderID, &conv.ReceiverID, &conv.Message, &conv.Read, &conv.CreatedAt,
				&conv.OtherUserID, &username, &firstName, &lastName, &profilePicURL, &conv.UnreadCount,
			)
			if err != nil {
				log.Printf("Error scanning conversation row: %v", err)
				continue
			}

			if username.Valid {
				conv.Username = username.String
			}
			if firstName.Valid {
				conv.FirstName = firstName.String
			}
			if lastName.Valid {
				conv.LastName = lastName.String
			}
			if profilePicURL.Valid {
				conv.ProfilePicURL = profilePicURL.String
			}

			conversations = append(conversations, conv)
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"success": true,
			"data":    conversations,
		})
	})

	//POST REQUESTS
	r.Post("/createAccount", func(w http.ResponseWriter, r *http.Request) {
		var user structs.User

		err := json.NewDecoder(r.Body).Decode(&user)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
		}

		id := uuid.New()
		fmt.Println(id)

		sqlStatement := `
			INSERT INTO users (name, email, password, id)
			VALUES ($1, $2, $3, $4)`

		_, db_err := db.Exec(sqlStatement, user.Name, user.Email, user.Password, id)

		if db_err != nil {
			log.Fatal(db_err)
		}
		fmt.Printf("Added user : %s - %s - %s\n", user.Name, user.Password, user.Email)
	})

	// Send a direct message
	r.Post("/api/messages", func(w http.ResponseWriter, r *http.Request) {
		var newMsg structs.NewDirectMessage

		err := json.NewDecoder(r.Body).Decode(&newMsg)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		// Validate the message
		if newMsg.SenderID == "" || newMsg.ReceiverID == "" || newMsg.Message == "" {
			http.Error(w, "Sender ID, Receiver ID, and Message are required", http.StatusBadRequest)
			return
		}

		// Create a new message
		id := uuid.New()
		now := time.Now()

		query := `
			INSERT INTO direct_messages (id, sender_id, receiver_id, message, read, created_at)
			VALUES ($1, $2, $3, $4, $5, $6)
			RETURNING id, sender_id, receiver_id, message, read, created_at
		`
		var msg structs.DirectMessage
		err = db.QueryRow(
			query,
			id.String(),
			newMsg.SenderID,
			newMsg.ReceiverID,
			newMsg.Message,
			false,
			now,
		).Scan(&msg.ID, &msg.SenderID, &msg.ReceiverID, &msg.Message, &msg.Read, &msg.CreatedAt)

		if err != nil {
			log.Printf("Error creating message: %v", err)
			http.Error(w, "Error creating message", http.StatusInternalServerError)
			return
		}

		response := structs.DirectMessageResponse{
			Success: true,
			Message: "Message sent successfully",
			Data:    msg,
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
	})

	// Mark messages as read
	r.Put("/api/messages/read/{senderId}/{receiverId}", func(w http.ResponseWriter, r *http.Request) {
		senderID := chi.URLParam(r, "senderId")
		receiverID := chi.URLParam(r, "receiverId")

		query := `
			UPDATE direct_messages
			SET read = true
			WHERE sender_id = $1 AND receiver_id = $2 AND read = false
		`
		result, err := db.Exec(query, senderID, receiverID)
		if err != nil {
			log.Printf("Error marking messages as read: %v", err)
			http.Error(w, "Error marking messages as read", http.StatusInternalServerError)
			return
		}

		rowsAffected, _ := result.RowsAffected()

		response := map[string]interface{}{
			"success": true,
			"message": fmt.Sprintf("%d messages marked as read", rowsAffected),
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
	})

	return r
}
