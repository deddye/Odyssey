package main

import (
	"fmt"
	"net/http"

	"github.com/deddye/odyssey/internal/routes"
)

func main() {

	router := routes.GetRouter()
	fmt.Println("Listening on port 42069")
	http.ListenAndServe(":42069", router)
}
