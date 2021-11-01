package main

import "testing"

func TestNewDeck(t *testing.T) {
	// Test deck is created with x amount of cards
	d := newDeck()

	if len(d) != 16 {
		t.Errorf("Expected deck lenght of 20, but got", len(d))
	}
}
