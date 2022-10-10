package main

import (
	"fmt"
)

func main() {
	var num1, num2 int

	fmt.Print("Primeiro número: ")
	fmt.Scan(&num1)

	fmt.Print("Segundo número: ")
	fmt.Scan(&num2)

	prod := num1 * num2

	fmt.Printf("%v * %v = %v \n", num1, num2, prod)
}
