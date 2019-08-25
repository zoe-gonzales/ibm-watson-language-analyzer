package test

import (
	"net/http"
	"net/http/httptest"
	"net/url"
	"strings"
	"testing"

	"github.com/labstack/echo"
	"github.com/stretchr/testify/assert"
	"github.com/zoe-gonzales/ibm-watson-language-analyzer/api"
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

	str := `{"Results": [{"Count": 1,"Relevance": 0.997527,"Text": "question",
			"Emotion": {"Anger": 0.098054,"Disgust": 0.051937,"Fear": 0.067837,"Joy": 0.07463,"Sadness": 0.090167},
			"Sentiment": {"Score": 0}}]}`

	// Assertions
	if assert.NoError(t, api.Keywords(c)) {
		assert.Equal(t, http.StatusOK, rec.Code)
		assert.NotEmpty(t, rec.Body.String())
		assert.JSONEq(t, str, rec.Body.String())
	}
}

func TestShouldPostCategoryDataAndGetResults(t *testing.T) {
	// Setup
	e := echo.New()
	f := make(url.Values)
	f.Set("text", "to be or not to be - that is the question")
	req := httptest.NewRequest(http.MethodPost, "/api/categories", strings.NewReader(f.Encode()))
	req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationForm)
	rec := httptest.NewRecorder()
	c := e.NewContext(req, rec)

	str := `{"Results": [{"Label": "/law, govt and politics/government/parliament","Score": 0.65029},
		{"Label": "/law, govt and politics/politics/elections/referendums","Score": 0.632086},
		{"Label": "/society/crime/property crime", "Score": 0.613622},
		{"Label": "/law, govt and politics/government/government contracting and procurement","Score": 0.598197},
		{"Label": "/religion and spirituality/judaism","Score": 0.595785},
		{"Label": "/law, govt and politics/government/legislative","Score": 0.583232},
		{"Label": "/law, govt and politics/politics/political parties","Score": 0.524719},
		{"Label": "/society/unrest and war","Score": 0.520347},
		{"Label": "/family and parenting/children","Score": 0.514923}]}`

	// Assertions
	if assert.NoError(t, api.Categories(c)) {
		assert.Equal(t, http.StatusOK, rec.Code)
		assert.NotEmpty(t, rec.Body.String())
		assert.JSONEq(t, str, rec.Body.String())
	}
}

func TestShouldPostEmotionDataAndGetResults(t *testing.T) {
	// Setup
	e := echo.New()
	f := make(url.Values)
	f.Set("text", "Don't cry because it's over, smile because it happened.")
	req := httptest.NewRequest(http.MethodPost, "/api/emotions", strings.NewReader(f.Encode()))
	req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationForm)
	rec := httptest.NewRecorder()
	c := e.NewContext(req, rec)

	str := `{"Results": {"Anger": 0.002315,"Disgust": 0.000491,"Fear": 0.003719,"Joy": 0.973723,"Sadness": 0.012258}}`

	// Assertions
	if assert.NoError(t, api.Emotions(c)) {
		assert.Equal(t, http.StatusOK, rec.Code)
		assert.NotEmpty(t, rec.Body.String())
		assert.JSONEq(t, str, rec.Body.String())
	}
}