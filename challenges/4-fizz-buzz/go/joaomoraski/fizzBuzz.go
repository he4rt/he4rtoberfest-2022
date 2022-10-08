package main

import (
	"fmt"
	"log"
	"os"      // acessar os argumentos da linha de comando (igual em C, 0 é o nome)
	"strconv" // conversoes
)

func FizzBuzz(numero int) (resultado []string) {
	const (
		FIZZ     string = "Fizz"
		BUZZ     string = "Buzz"
		FIZZBUZZ string = "FizzBuzz"
	)
	for i := 1; i <= numero; i++ {
		if i%3 == 0 {
			if i%5 == 0 {
				resultado = append(resultado, FIZZBUZZ)
			} else {
				resultado = append(resultado, FIZZ)
			}
		} else if i%5 == 0 {
			if i%3 == 0 {
				resultado = append(resultado, FIZZBUZZ)
			} else {
				resultado = append(resultado, BUZZ)
			}
		} else {
			resultado = append(resultado, strconv.Itoa(i))
		}
	}
	return
}

func main() {
	// chamada por argumento
	if len(os.Args) != 2 {
		fmt.Println("Número de argumentos informado é maior ou menor do que o necessário")
		return
	}
	// Atoi igual no C
	numero, err := strconv.Atoi(os.Args[1])
	if err != nil {
		log.Fatalf("Não foi possivel converter '%v' para um inteiro", os.Args[1])
	}
	for _, resultado := range FizzBuzz(numero) {
		fmt.Println(resultado)
	}

}
