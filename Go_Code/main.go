package main

import "fmt"

func main() {
	// var card string = "Ace of Spades"
	card := "Ace of Spades" // initialize a new variable
	cards := []string{"Ace of Diamonds", newCard()} // initialize slice of strings and pass in a new value and the func NewCard()
	cards =  append(cards, "Six of Spades")
	// In the above, append() returns a new slice with the original value of cards and an additional value appended to it called "six of Spades". 
	// Then all od that gets reassigned to the variable cards.

	for i, card := range cards { // we're taking the slice of cards and ooping over each individual card
		fmt.Println(i, card) // we're printing out each card in the slice, one by one
	}
}

func newCard() string { // you need to define the type of the data within this function so that you can use it in func main
	return "Five of Diamonds"
}