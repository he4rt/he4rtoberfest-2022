package main

import (
	"fmt"
	"os" // acessar os argumentos da linha de comando (igual em C, 0 é o nome)

	// conversoes
	"strings"
)

const (
	KEYA rune = 'A'
	KEYC rune = 'C'
	KEYG rune = 'G'
	KEYT rune = 'T'
)

func ContarNucleotideos(sequencia string) (resultado map[string]int) {
	resultado = make(map[string]int)
	for _, letra := range sequencia {
		switch letra {
		case KEYA:
			resultado["A"]++
		case KEYC:
			resultado["C"]++
		case KEYG:
			resultado["G"]++
		case KEYT:
			resultado["T"]++
		default:
			resultado = make(map[string]int)
			resultado["I"]++
			return
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

	resultado := ContarNucleotideos(strings.ToUpper(os.Args[1]))
	if resultado["I"] != 0 {
		fmt.Println("INVALID")
	}
	fmt.Printf("'A': %d, 'C': %d, 'G': %d, 'T': %d\n",
		resultado["A"], resultado["C"], resultado["G"], resultado["T"])
}
