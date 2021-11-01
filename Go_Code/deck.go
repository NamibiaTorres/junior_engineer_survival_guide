package main

import (
	"fmt"
	"io/ioutil"
	"math/rand"
	"strings"
	"os"
	"time"
)

type deck []string // create a new deck type that equals a slice of strings

func newDeck() deck { // anotate the type by calling it after the function call.
// this function doesn't need a receiver because we are not referecing a variable and calling a method on that variable.
	cards := deck{}

	cardSuits := []string{"Spades", "Diamonds", "Hearts", "Clubs"}
	cardValues := []string{"Ace", "Two", "Three", "Four"}

	for _, suit := range cardSuits { // replace index i with _
		for _, value := range cardValues { //replace 
			cards = append(cards, value+" of "+suit)
		}
	}

	return cards

}

func (d deck) print() { // the word "deck" references the type deck we created in line 3, references a variable in this case the cards array in main.go
	// In this function "d" and "deck" are passed in to what is known as the "receiver" and then we name the function print()
	for i, card := range d {
		fmt.Println(i, card)
	}
}

// func deal (d deck, handsize int) (deck, deck) { // telling Go we expect 2 values and they are both going to be of type deck
// 	return d[]:handsize], d[handsize:]
// }

func (d deck) toString() string {
	return strings.Join([]string(d), ",") // using the Join library from teh String package. We take in the slice of string, and seperate by a comma 
}

func (d deck) saveToFile(filename string) error {
	return ioutil.WriteFile(filename, []byte(d.toString()), 0666) // 0666 is code for anyone can read or write this file
}

func newDeckFromFile(filename string) deck {
	byteSlice, err := ioutil.ReadFile(filename) // if nothing is wrong, then teh err returns a nil value
	if err != nil { // condition to check
		// only executes if there is an error:
		// Option1: Log error and return call to newDeck
		// Option2: Log the error and quit the program

		// Option2:
		fmt.Println("Error:", err)
		os.Exit(1) // a value of 0 means Don't Exit, and 1 means Exit! Abort! Abort!
	}

	sliceOfStrings := strings.Split(string(byteSlice), ",") // string() is the value we want, and bs is the value we have
	return deck(sliceOfStrings)
}

func (d deck) shuffle() {
// Write some code to always provide a new random generation of cards
source := rand.NewSource(time.Now().UnixNano()) // use this to generate a different Int64 object as our seed object
r := rand.New(source) // we are making a value of type *Rand, so that it can call the int function and return an int value

// Shuffle cards code:
	for i := range d {
		newPosition := r.Intn(len(d) - 1) // generates a random number between 0 and the end of the slice

		d[i], d[newPosition] = d[newPosition], d[i] // swaps the elements at i and newPosition
	}
}