package test

import (
	"testing"

	"github.com/zoe-gonzales/ibm-watson-language-analyzer/env"
	"github.com/zoe-gonzales/ibm-watson-language-analyzer/watson"
)

func TestShouldGetKeywordsFromText(t *testing.T) {
	apiKey := env.GetAPIKey()
	text := "To be, or not to be - that is the question"
	limit := int64(10)
	data := watson.GetKeywords(apiKey, text, limit)
	if data == nil {
		t.Errorf("Error in getting keyword analysis: no data received")
	}
}

func TestShouldGetCategoriesFromText(t *testing.T) {
	apiKey := env.GetAPIKey()
	text := "Beware of Hackers!"
	limit := int64(5)
	data := watson.GetCategories(apiKey, text, limit)
	if data == nil {
		t.Errorf("Error in getting category analysis: no data received")
	}
}

func TestShouldGetEmotionsFromText(t *testing.T) {
	apiKey := env.GetAPIKey()
	text := "A dream you dream alone is only a dream. A dream you dream together is reality."
	data := watson.GetEmotions(apiKey, text)
	if data.Anger == 0 &&
		data.Disgust == 0 &&
		data.Fear == 0 &&
		data.Joy == 0 &&
		data.Sadness == 0 {
		t.Errorf("Error in getting emotions analysis: no data received")
	}
}
