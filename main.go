package main

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	// loading .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading env file")
	}
	apiKey := os.Getenv("KEY")
}