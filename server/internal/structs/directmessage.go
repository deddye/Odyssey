package structs

import "time"

// DirectMessage represents a direct message between two users
type DirectMessage struct {
	ID         string    `json:"id"`
	SenderID   string    `json:"sender_id"`
	ReceiverID string    `json:"receiver_id"`
	Message    string    `json:"message"`
	Read       bool      `json:"read"`
	CreatedAt  time.Time `json:"created_at"`
}

// NewDirectMessage creates a new direct message
type NewDirectMessage struct {
	SenderID   string `json:"sender_id"`
	ReceiverID string `json:"receiver_id"`
	Message    string `json:"message"`
}

// DirectMessageResponse represents the response for a direct message operation
type DirectMessageResponse struct {
	Success bool          `json:"success"`
	Message string        `json:"message,omitempty"`
	Data    DirectMessage `json:"data,omitempty"`
}

// DirectMessagesResponse represents the response for multiple direct messages
type DirectMessagesResponse struct {
	Success bool            `json:"success"`
	Message string          `json:"message,omitempty"`
	Data    []DirectMessage `json:"data,omitempty"`
}
