package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
)

type create_user_struct struct {
	FirstName string
	LastName  string
	Email     string
}

func main() {
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
		decoder := json.NewDecoder(r.Body)

		var user create_user_struct

		err := decoder.Decode(&user)
		if err != nil {
			panic(err)
		}
		fmt.Printf("%s - %s - %s\n", user.FirstName, user.LastName, user.Email)

	})
	fmt.Println("Listening on port 42069")
	http.ListenAndServe(":42069", r)
}
