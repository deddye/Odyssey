package routes

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/deddye/odyssey/internal/structs"
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
)

func GetRouter() *chi.Mux {
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

		var user structs.User

		err := decoder.Decode(&user)
		if err != nil {
			panic(err)
		}
		fmt.Printf("%s - %s - %s\n", user.Name, user.Password, user.Email)

	})

	return r
}
