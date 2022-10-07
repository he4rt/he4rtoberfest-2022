package main

import (
	"fmt"
	"log"
	"os"      // acessar os argumentos da linha de comando (igual em C, 0 é o nome)
	"strconv" // conversoes
)

func ProdutoSimples(numero1, numero2 int) int {
	return numero1 * numero2
}

func main() {
	// chamada por argumento
	if len(os.Args) != 3 {
		fmt.Println("Número de argumentos informado é maior do que o necessário")
		return
	}
	// Atoi igual no C
	numero1, err := strconv.Atoi(os.Args[1])
	numero2, err := strconv.Atoi(os.Args[2])
	if err != nil {
		log.Fatalf("Não foi possivel converter algum dos parametros para um inteiro")
	}
	fmt.Printf("produto: %d\n", ProdutoSimples(numero1, numero2))
}
