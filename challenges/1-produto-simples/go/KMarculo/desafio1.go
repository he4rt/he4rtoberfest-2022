package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	imput := os.Args[:]

	num1, err := strconv.Atoi(imput[1])

	if err != nil {
		fmt.Printf("Argumento '%s' invalido, digite apenas numeros inteiros", imput[1])
	}

	num2, err := strconv.Atoi(imput[2])
	if err != nil {
		fmt.Printf("Argumento '%s' invalido, digite apenas numeros inteiros", imput[2])
	}

	fmt.Printf("Produto: %d", (num1 * num2))

}
