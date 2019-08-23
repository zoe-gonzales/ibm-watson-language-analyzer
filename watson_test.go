package main

import (
	"testing"
)

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
