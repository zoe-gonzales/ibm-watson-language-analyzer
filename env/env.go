package env

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

// GetAPIKey function
func GetAPIKey() string {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("Error loading env file")
	}
	apiKey := os.Getenv("KEY")
	return apiKey
}
