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

func TestShouldGetKeywordsFromText(t *testing.T) {
	apiKey := getAPIKey()
	text := "To be, or not to be - that is the question"
	l := int64(10)
	data := getKeywords(apiKey, text, l)
	if data == nil {
		t.Errorf("Sorry, no keywords were found")
	}
}

func TestShouldGetCategoriesFromText(t *testing.T) {
	apiKey := getAPIKey()
	text := "Beware of Hackers!"
	l := int64(5)
	data := getCategories(apiKey, text, l)
	if data == nil {
		t.Errorf("Sorry, no categories were found")
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
		t.Errorf("Sorry, no emotions were found")
	}
}
