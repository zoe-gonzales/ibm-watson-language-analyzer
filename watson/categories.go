package watson

import (
	"encoding/json"
	"fmt"
	"strings"

	"github.com/watson-developer-cloud/go-sdk/naturallanguageunderstandingv1"
)

// Usage struct
type Usage struct {
	Features       int
	TextCharacters int
	TextUnits      int
}

// CategoryAnalysis struct
type CategoryAnalysis struct {
	Language   string
	Usage      Usage
	Categories []Category
}

// Category struct
type Category struct {
	Label string
	Score float64
}

// GetCategories function
func GetCategories(apiKey string, text string, l int64) []Category {
	naturalLanguageUnderstanding, naturalLanguageUnderstandingErr := naturallanguageunderstandingv1.
		NewNaturalLanguageUnderstandingV1(&naturallanguageunderstandingv1.NaturalLanguageUnderstandingV1Options{
			URL:       "https://gateway.watsonplatform.net/natural-language-understanding/api",
			Version:   "2019-07-12",
			IAMApiKey: apiKey,
		})
	if naturalLanguageUnderstandingErr != nil {
		panic(naturalLanguageUnderstandingErr)
	}

	limit := int64(l)

	response, responseErr := naturalLanguageUnderstanding.Analyze(
		&naturallanguageunderstandingv1.AnalyzeOptions{
			Text: &text,
			Features: &naturallanguageunderstandingv1.Features{
				Categories: &naturallanguageunderstandingv1.CategoriesOptions{
					Limit: &limit,
				},
			},
		},
	)
	if responseErr != nil {
		panic(responseErr)
	}
	result := naturalLanguageUnderstanding.GetAnalyzeResult(response)
	b, _ := json.MarshalIndent(result, "", "   ")
	// unmarshaling CategoryAnalysis struct from b
	c := CategoryAnalysis{}
	err := json.Unmarshal(b, &c)
	if err != nil {
		panic(err)
	}
	// Print categories & their scores
	data := c.Categories
	fmt.Printf("%v categories found:\n", len(data))
	for _, cat := range data {
		noSlash := strings.Split(cat.Label, "/")
		newString := strings.Join(noSlash, ", ")
		trimmed := strings.TrimPrefix(newString, ", ")
		fmt.Printf("category: %v | score: %v\n", trimmed, cat.Score)
	}
	return data
}
