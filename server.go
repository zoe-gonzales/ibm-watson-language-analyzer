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
	// Start server
	e.Logger.Fatal(e.Start(":1333"))
}

func keywordHelper(c echo.Context) error {
	req := c.Request()
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")
	return api.Keywords(c, "prod")
}

func categoryHelper(c echo.Context) error {
	req := c.Request()
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")
	return api.Categories(c, "prod")
}

func emotionHelper(c echo.Context) error {
	req := c.Request()
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded")
	return api.Emotions(c, "prod")
}
