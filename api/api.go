package api

import (
	"bytes"
	"net/http"
	"os"

	"github.com/labstack/echo"
	"github.com/zoe-gonzales/ibm-watson-language-analyzer/env"
	"github.com/zoe-gonzales/ibm-watson-language-analyzer/watson"
)

// KeyOutput struct
type KeyOutput struct {
	Results []watson.Keyword
}

// CatOutput struct
type CatOutput struct {
	Results []watson.Category
}

// EmOutput struct
type EmOutput struct {
	Results watson.Emotions
}

// Keywords function
func Keywords(c echo.Context, e string) error {
	res := c.Request().Body
	buf := new(bytes.Buffer)
	buf.ReadFrom(res)
	text := buf.String()
	apiKey := os.Getenv("KEY")
	if apiKey == "" {
		apiKey = env.GetAPIKey(e)
	}
	limit := int64(10)
	data := watson.GetKeywords(apiKey, text, limit)
	d := &KeyOutput{
		Results: data,
	}
	return c.JSON(http.StatusOK, d)
}

// Categories function
func Categories(c echo.Context, e string) error {
	res := c.Request().Body
	buf := new(bytes.Buffer)
	buf.ReadFrom(res)
	text := buf.String()
	apiKey := os.Getenv("KEY")
	if apiKey == "" {
		apiKey = env.GetAPIKey(e)
	}
	limit := int64(10)
	data := watson.GetCategories(apiKey, text, limit)
	d := &CatOutput{
		Results: data,
	}
	return c.JSON(http.StatusOK, d)
}

// Emotions function
func Emotions(c echo.Context, e string) error {
	res := c.Request().Body
	buf := new(bytes.Buffer)
	buf.ReadFrom(res)
	text := buf.String()
	apiKey := os.Getenv("KEY")
	if apiKey == "" {
		apiKey = env.GetAPIKey(e)
	}
	data := watson.GetEmotions(apiKey, text)
	d := &EmOutput{
		Results: data,
	}
	return c.JSON(http.StatusOK, d)
}
