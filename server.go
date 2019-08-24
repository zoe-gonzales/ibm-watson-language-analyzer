package main

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/zoe-gonzales/ibm-watson-language-analyzer/api"
)

func main() {
	// Create new echo server
	e := echo.New()

	// Endpoints
	e.POST("/api/keywords", api.Keywords)
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
