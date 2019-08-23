package main

import (
	"testing"
)

func TestShouldGetAPIKeyFromEnvFile(t *testing.T) {
	key := getAPIKey()
	if key == "" {
		t.Errorf("Error: expected api key by got %v instead", key)
	}
	if len(key) != 44 {
		t.Errorf("Error: expected api key length of 44 but instead got %v", len(key))
	}
}
