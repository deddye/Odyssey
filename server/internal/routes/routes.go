package routes

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/deddye/odyssey/internal/structs"
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"github.com/google/uuid"
	_ "github.com/lib/pq"
)

func GetRouter(db_url string) *chi.Mux {

	db, err := sql.Open(
		"postgres", "user=postgres password=password dbname=users sslmode=disable")
	if err != nil {
		log.Fatal(err)
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

	//POST REQUESTS
	r.Post("/createAccount", func(w http.ResponseWriter, r *http.Request) {

		var user structs.User

		err := json.NewDecoder(r.Body).Decode(&user)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
		}

		//See if there is already a user with that email
		// s := fmt.Sprintf("SELECT * FROM users WHERE email = '%q'", user.Email)
		// rows, e1 := db.Query(s)

		// if e1 != nil {
		// 	log.Fatal(e1)
		// }

		// cols, e2 := rows.Columns()
		// if e2 != nil {
		// 	log.Fatal(e2)
		// }

		// if len(cols) != 0 {

		// 	w.WriteHeader(http.StatusOK)
		// 	w.Header().Set("Content-Type", "application/json")

		// } else {

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
		// }

	})

	return r
}
