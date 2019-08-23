package main

import (
	"encoding/json"
	"net/http"

	"github.com/labstack/echo"
)

func keywords(c echo.Context) error {
	text := c.FormValue("text")
	apiKey := getAPIKey()
	limit := int64(10)
	data := getKeywords(apiKey, text, limit)
	d, _ := json.Marshal(data)
	return c.JSON(http.StatusOK, d)
}

func categories(c echo.Context) error {
	text := c.FormValue("text")
	apiKey := getAPIKey()
	limit := int64(10)
	data := getCategories(apiKey, text, limit)
	d, _ := json.Marshal(data)
	return c.JSON(http.StatusOK, d)
}

func emotions(c echo.Context) error {
	text := c.FormValue("text")
	apiKey := getAPIKey()
	data := getEmotions(apiKey, text)
	d, _ := json.Marshal(data)
	return c.JSON(http.StatusOK, d)
}
