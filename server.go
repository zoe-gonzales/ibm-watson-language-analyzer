package main

import (
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo"
)

func main() {
	// Create new echo server
	e := echo.New()

	// Endpoints
	e.POST("/api/keywords", keywords)
	e.POST("/api/categories", func(c echo.Context) error {
		return c.String(http.StatusOK, "POST request to categories endpoint was successful")
	})
	e.POST("/api/emotions", func(c echo.Context) error {
		return c.String(http.StatusOK, "POST request to emotions endpoint was successful")
	})

	// Serving react app
	e.Static("/", "client/public/index.html")

	// Start server
	e.Logger.Fatal(e.Start(":1333"))
}

func getAPIKey() string {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading env file")
	}
	apiKey := os.Getenv("KEY")
	return apiKey
}
