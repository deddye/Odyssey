package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/deddye/odyssey/internal/routes"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		println("Failed to Load Environment")
		return
	}
	db := os.Getenv("DATABASE_URL")
	println(db)
	router := routes.GetRouter(db)
	fmt.Println("Listening on port 42069")
	http.ListenAndServe(":42069", router)
}
