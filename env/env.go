package env

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

// GetAPIKey function
func GetAPIKey(e string) string {
	var path string
	// check environment to determine path to .env
	if e == "test" {
		path = "../.env"
	} else {
		path = ".env"
	}
	// load /env file
	err := godotenv.Load(path)
	if err != nil {
		log.Fatal("Error loading env file", err)
	}
	apiKey := os.Getenv("KEY")
	return apiKey
}
