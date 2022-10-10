package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	var dna string
	fmt.Println("Digite uma sequência de DNA:")
	fmt.Println("Lembrando que as letras possíveis são A/C/G/T")
	fmt.Println("Exemplo: GACAT")
	fmt.Scan(&dna)
	dnaSepared := strings.Split(dna, "")
	var totalA, totalC, totalG, totalT int
	for _, value := range dnaSepared {
		if value == "A" {
			totalA += 1
		} else if value == "C" {
			totalC += 1
		} else if value == "G" {
			totalG += 1
		} else if value == "T" {
			totalT += 1
		} else {
			fmt.Println("Sequência de DNA inválida")
			os.Exit(0)
		}
	}
	fmt.Printf("'A': %d, 'C': %d, 'G': %d, 'T': %d \n", totalA, totalC, totalG, totalT)
}
