package main

import (
	"github.com/labstack/echo"
	"github.com/zoe-gonzales/ibm-watson-language-analyzer/api"
)

func main() {
	// Create new echo server
	e := echo.New()
	// Endpoints
	e.POST("/api/keywords", api.Keywords)
	e.POST("/api/categories", api.Categories)
	e.POST("/api/emotions", api.Emotions)
	// Serving react app
	e.Static("/", "client/public/index.html")
	// Start server
	e.Logger.Fatal(e.Start(":1333"))
}
