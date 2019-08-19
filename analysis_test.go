package main

import (
	"log"
	"os"
	"testing"

	"github.com/joho/godotenv"
)

func getAPIKey() string {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading env file")
	}
	apiKey := os.Getenv("KEY")
	return apiKey
}

func TestShouldGetAPIKeyFromEnvFile(t *testing.T) {
	key := getAPIKey()
	if key == "" {
		t.Errorf("Error: expected api key by got %v instead", key)
	}
	if len(key) != 44 {
		t.Errorf("Error: expected api key length of 44 but instead got %v", len(key))
	}
}

func TestShouldGetKeywordsFromText(t *testing.T) {
	apiKey := getAPIKey()
	text := "To be, or not to be - that is the question"
	limit := int64(10)
	data := getKeywords(apiKey, text, limit)
	if data == nil {
		t.Errorf("Error in getting keyword analysis: no data received")
	}
}

func TestShouldGetCategoriesFromText(t *testing.T) {
	apiKey := getAPIKey()
	text := "Beware of Hackers!"
	limit := int64(5)
	data := getCategories(apiKey, text, limit)
	if data == nil {
		t.Errorf("Error in getting category analysis: no data received")
	}
}

func TestShouldGetEmotionsFromText(t *testing.T) {
	apiKey := getAPIKey()
	text := "A dream you dream alone is only a dream. A dream you dream together is reality."
	data := getEmotions(apiKey, text)
	if data.Anger == 0 &&
		data.Disgust == 0 &&
		data.Fear == 0 &&
		data.Joy == 0 &&
		data.Sadness == 0 {
		t.Errorf("Error in getting emotions analysis: no data received")
	}
}
