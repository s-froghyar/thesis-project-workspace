package api_internals

import (
	"testing"
)

func TestApiInternals(t *testing.T) {
	result := ApiInternals("works")
	if result != "ApiInternals works" {
		t.Error("Expected ApiInternals to append 'works'")
	}
}
