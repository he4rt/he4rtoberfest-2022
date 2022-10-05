package main

import (
	"fmt"
)

func main() {
	var firstNumber uint
	var secondNumber uint
	var PROD uint

	fmt.Println("Este programa retorna o produto de 2 números inteiros.")
	fmt.Println("Por favor digite o 1° número:")
	fmt.Scan(&firstNumber)
	fmt.Println("Por favor digite o 2° número:")
	fmt.Scan(&secondNumber)

	PROD = firstNumber * secondNumber

	fmt.Printf("\nProduto: %v", PROD)

}
