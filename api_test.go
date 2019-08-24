package main

import (
	"net/http"
	"net/http/httptest"
	"net/url"
	"strings"
	"testing"

	"github.com/labstack/echo"
	"github.com/stretchr/testify/assert"
)

func TestShouldPostKeywordDataAndGetResults(t *testing.T) {
	// Setup
	e := echo.New()
	f := make(url.Values)
	f.Set("text", "to be or not to be - that is the question")
	req := httptest.NewRequest(http.MethodPost, "/api/keywords", strings.NewReader(f.Encode()))
	req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationForm)
	rec := httptest.NewRecorder()
	c := e.NewContext(req, rec)

	// Assertions
	if assert.NoError(t, keywords(c)) {
		assert.Equal(t, http.StatusOK, rec.Code)
		assert.NotEmpty(t, rec.Body.String())
	}
}
