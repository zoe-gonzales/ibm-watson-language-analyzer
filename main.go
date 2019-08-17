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
	// text := "All that glitters is not gold"
	// var limit int64
	// limit = 6
	// getKeywords(apiKey, text, limit)
	// getCategories(apiKey, text, limit)
	t := "Take a look! An amazing deal has been spotted"
	getEmotions(apiKey, t)
}
