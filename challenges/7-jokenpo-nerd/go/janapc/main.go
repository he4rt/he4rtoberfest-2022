package main

import (
	"fmt"
	"sort"
)

func main() {
	var rounds int
	var message string
	choicesAvailable := []string{"lagarto", "papel", "pedra", "spock", "tesoura"}
	options := [][]string{
		{"spock", "papel"},
		{"pedra", "spock"},
		{"tesoura", "lagarto"},
		{"tesoura", "pedra"},
		{"papel", "lagarto"},
	}
	fmt.Println("Quantas rodadas vai ter:")
	fmt.Scan(&rounds)
	fmt.Println("Lembrando que as opções validas são: lagarto/papel/pedra/spock/tesoura e a ordem é Rajesh e Sheldon")
	fmt.Println("Exemplo: spock tesoura")
	for count := 1; count <= rounds; count++ {
		var input1, input2 string
		var HasRajeshWin bool
		fmt.Println("\nQual a escolha de cada um:")
		fmt.Scan(&input1, &input2)
		indexChoice := sort.SearchStrings(choicesAvailable, input1)
		for _, value := range options[indexChoice] {
			if value == input2 {
				HasRajeshWin = true
			}
		}
		if HasRajeshWin {
			message += "rajesh\n"
		} else if input1 == input2 {
			message += "empate\n"
		} else {
			message += "sheldon\n"
		}
	}
	fmt.Print("\n", message)
}
