package main

import (
	"encoding/json"
	"fmt"

	"github.com/watson-developer-cloud/go-sdk/naturallanguageunderstandingv1"
)

// Emotions struct
type Emotions struct {
	Anger   float64
	Disgust float64
	Fear    float64
	Joy     float64
	Sadness float64
}

// Document struct
type Document struct {
	Emotion Emotions
}

// Emotion struct
type Emotion struct {
	Document Document
}

// Usages struct
type Usages struct {
	Features       int
	TextCharacters int
	TextUnits      int
}

// EmotionAnalysis struct
type EmotionAnalysis struct {
	Language string
	Usage    Usages
	Emotion  Emotion
}

func getEmotions(apiKey string, text string) Emotions {
	naturalLanguageUnderstanding, naturalLanguageUnderstandingErr := naturallanguageunderstandingv1.
		NewNaturalLanguageUnderstandingV1(&naturallanguageunderstandingv1.NaturalLanguageUnderstandingV1Options{
			URL:       "https://gateway.watsonplatform.net/natural-language-understanding/api",
			Version:   "2019-07-12",
			IAMApiKey: apiKey,
		})
	if naturalLanguageUnderstandingErr != nil {
		panic(naturalLanguageUnderstandingErr)
	}

	response, responseErr := naturalLanguageUnderstanding.Analyze(
		&naturallanguageunderstandingv1.AnalyzeOptions{
			Text: &text,
			Features: &naturallanguageunderstandingv1.Features{
				Emotion: &naturallanguageunderstandingv1.EmotionOptions{},
			},
		},
	)
	if responseErr != nil {
		panic(responseErr)
	}
	result := naturalLanguageUnderstanding.GetAnalyzeResult(response)
	b, _ := json.MarshalIndent(result, "", "   ")
	// unmarshaling json from b
	e := EmotionAnalysis{}
	err := json.Unmarshal(b, &e)
	if err != nil {
		panic(err)
	}
	data := e.Emotion.Document.Emotion
	fmt.Printf(
		"Anger: %v \n Disgust: %v \n Fear: %v \n Joy: %v \n Sadness: %v \n",
		data.Anger,
		data.Disgust,
		data.Fear,
		data.Joy,
		data.Sadness,
	)
	return data
}
