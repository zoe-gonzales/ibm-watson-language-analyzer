package main

import (
	"fmt"
	"os"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/zoe-gonzales/ibm-watson-language-analyzer/api"
)

func main() {
	// Create new echo server
	e := echo.New()
	// Serve static files
	e.Static("/", "web")
	// Endpoints
	e.POST("/api/keywords", keywordHelper)
	e.POST("/api/categories", categoryHelper)
	e.POST("/api/emotions", emotionHelper)
	e.Use(middleware.CORS())
	// Start server
	port := os.Getenv("PORT")
	if port == "" {
		port = "1333"
		fmt.Println("Running app locally")
	}
	e.Logger.Fatal(e.Start(":" + port))
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
