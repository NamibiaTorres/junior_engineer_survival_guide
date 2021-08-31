package main

func main() {
	// cards := newDeck()
	// cards.saveToFile("my_cards")

	// Call the function in the new file called deck.go:
	// cards.print() // In deck.go, the cards variable gets passed into the print function as the "d" variable.

	// hand, remainingCards := deal(cards, 5) // pass in your cards variable and the "handsize" of size 5
	// the first return value will be applied to "hand" and the second return value will be of type "remainingCards"

	// hand.print()
	// remainingCards.print()

	// fmt.Println(cards.toString())

	// cards := newDeckFromFile("my_cards")
	// cards.print()

	cards := newDeck()
	cards.shuffle()
	cards.print()
}