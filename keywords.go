package main

import (
	"encoding/json"
	"fmt"

	"github.com/watson-developer-cloud/go-sdk/naturallanguageunderstandingv1"
)

// Score struct
type Score struct {
	Score float64
}

// EmotionKeywords struct
type EmotionKeywords struct {
	Anger   float64
	Disgust float64
	Fear    float64
	Joy     float64
	Sadness float64
}

// Keyword struct
type Keyword struct {
	Count     int
	Relevance float64
	Text      string
	Emotion   EmotionKeywords
	Sentiment Score
}

// Uses struct
type Uses struct {
	Features       int
	TextCharacters int
	TextUnits      int
}

// KeywordAnalysis struct
type KeywordAnalysis struct {
	Language string
	Usage    Uses
	Keywords []Keyword
}

func getKeywords(apiKey string, text string, l int64) []Keyword {
	naturalLanguageUnderstanding, naturalLanguageUnderstandingErr := naturallanguageunderstandingv1.
		NewNaturalLanguageUnderstandingV1(&naturallanguageunderstandingv1.NaturalLanguageUnderstandingV1Options{
			URL:       "https://gateway.watsonplatform.net/natural-language-understanding/api",
			Version:   "2019-07-12",
			IAMApiKey: apiKey,
		})
	if naturalLanguageUnderstandingErr != nil {
		panic(naturalLanguageUnderstandingErr)
	}

	sentiment := true
	emotion := true
	limit := int64(l)

	response, responseErr := naturalLanguageUnderstanding.Analyze(
		&naturallanguageunderstandingv1.AnalyzeOptions{
			Text: &text,
			Features: &naturallanguageunderstandingv1.Features{
				Keywords: &naturallanguageunderstandingv1.KeywordsOptions{
					Sentiment: &sentiment,
					Emotion:   &emotion,
					Limit:     &limit,
				},
			},
		},
	)
	if responseErr != nil {
		panic(responseErr)
	}
	result := naturalLanguageUnderstanding.GetAnalyzeResult(response)
	b, _ := json.MarshalIndent(result, "", "   ")
	// unmarshaling KeywordAnalysis struct from b
	k := KeywordAnalysis{}
	err := json.Unmarshal(b, &k)
	if err != nil {
		panic(err)
	}
	// Print keywords & their relevance
	data := k.Keywords
	fmt.Printf("%v keywords found: \n", len(data))
	for _, word := range data {
		fmt.Printf("keyword: %v | relevance: %v \n", word.Text, word.Relevance)
	}
	return data
}
