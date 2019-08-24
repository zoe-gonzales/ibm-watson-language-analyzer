package api

import (
	"encoding/json"
	"net/http"

	"github.com/labstack/echo"
	"github.com/zoe-gonzales/ibm-watson-language-analyzer/env"
	"github.com/zoe-gonzales/ibm-watson-language-analyzer/watson"
)

// Output struct
type Output struct {
	Results []watson.Keyword
}

// Keywords function
func Keywords(c echo.Context) error {
	text := c.FormValue("text")
	apiKey := env.GetAPIKey()
	limit := int64(10)
	data := watson.GetKeywords(apiKey, text, limit)
	d := &Output{
		Results: data,
	}
	return c.JSON(http.StatusOK, d)
}

// Categories function
func Categories(c echo.Context) error {
	text := c.FormValue("text")
	apiKey := env.GetAPIKey()
	limit := int64(10)
	data := watson.GetCategories(apiKey, text, limit)
	d, _ := json.Marshal(data)
	return c.JSON(http.StatusOK, d)
}

// Emotions function
func Emotions(c echo.Context) error {
	text := c.FormValue("text")
	apiKey := env.GetAPIKey()
	data := watson.GetEmotions(apiKey, text)
	d, _ := json.Marshal(data)
	return c.JSON(http.StatusOK, d)
}
