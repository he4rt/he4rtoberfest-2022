package main

import "fmt"

func hashTable() map[string]int {
	nucleotideo := map[string]int{"A": 0}
	nucleotideo["C"] = 0
	nucleotideo["G"] = 0
	nucleotideo["T"] = 0

	return nucleotideo
}

func contarNucleotideo(sequencia string) (map[string]int, string) {

	nucleotideo := hashTable()

	for _, base := range sequencia {

		if base != 'A' && base != 'C' && base != 'G' && base != 'T' {
			return nucleotideo, "Sequência de DNA inválida"
		}

		nucleotideo[string(base)]++
	}

	return nucleotideo, " "
}

func main() {
	sequencia := "GATTACA"

	nucleotideo, erro := contarNucleotideo(sequencia)

	fmt.Println(sequencia)

	if erro != " " {
		fmt.Println(erro)
	} else {
		fmt.Println(nucleotideo)
	}
}
