package main

import (
	"github.com/labstack/echo"
	"github.com/zoe-gonzales/ibm-watson-language-analyzer/api"
)

func main() {
	// Create new echo server
	e := echo.New()
	// Endpoints
	e.POST("/api/keywords", keywordHelper)
	e.POST("/api/categories", categoryHelper)
	e.POST("/api/emotions", emotionHelper)
	// Serving react app
	e.Static("/", "client/public/index.html")
	// Start server
	e.Logger.Fatal(e.Start(":1333"))
}

func keywordHelper(c echo.Context) error {
	return api.Keywords(c, "prod")
}

func categoryHelper(c echo.Context) error {
	return api.Categories(c, "prod")
}

func emotionHelper(c echo.Context) error {
	return api.Emotions(c, "prod")
}
