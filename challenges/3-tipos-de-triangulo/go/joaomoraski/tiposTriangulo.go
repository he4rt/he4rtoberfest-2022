package main

import (
	"fmt"
	"log"
	m "math"
	"os" // acessar os argumentos da linha de comando (igual em C, 0 é o nome)
	"sort"
	"strconv" // conversoes
)

func TiposTriangulo(lados []float64) (resultados []string) {
	sort.Slice(lados, func(i, j int) bool {
		return lados[i] > lados[j]
	})
	const LADOA, LADOB, LADOC = 0, 1, 2
	if lados[LADOA] >= (lados[LADOB] + lados[LADOC]) {
		resultados = append(resultados, "NAO FORMA TRIANGULO")
		return
	}
	if m.Pow(lados[LADOA], 2) == (m.Pow(lados[LADOB], 2) + m.Pow(lados[LADOC], 2)) {
		resultados = append(resultados, "TRIANGULO RETANGULO")
	}
	if m.Pow(lados[LADOA], 2) > (m.Pow(lados[LADOB], 2) + m.Pow(lados[LADOC], 2)) {
		resultados = append(resultados, "TRIANGULO OBTUSANGULO")
	}
	if m.Pow(lados[LADOA], 2) < (m.Pow(lados[LADOB], 2) + m.Pow(lados[LADOC], 2)) {
		resultados = append(resultados, "TRIANGULO ACUTANGULO")
	}
	if lados[LADOA] == lados[LADOB] && lados[LADOB] == lados[LADOC] {
		resultados = append(resultados, "TRIANGULO EQUILATERO")
	} else if lados[LADOA] == lados[LADOB] || lados[LADOB] == lados[LADOC] || lados[LADOC] == lados[LADOA] {
		resultados = append(resultados, "TRIANGULO ISOSCELES")
	}
	return

}

func main() {
	// chamada por argumento
	if len(os.Args) != 4 {
		fmt.Println("Número de argumentos informado é maior ou menor do que o necessário")
		return
	}
	// Atoi igual no C
	ladoA, err := strconv.ParseFloat(os.Args[1], 64)
	if err != nil {
		log.Fatalf("Não foi possivel converter '%v' para um inteiro", os.Args[1])
	}
	ladoB, err := strconv.ParseFloat(os.Args[2], 64)
	if err != nil {
		log.Fatalf("Não foi possivel converter '%v' para um inteiro", os.Args[2])
	}
	ladoC, err := strconv.ParseFloat(os.Args[3], 64)
	if err != nil {
		log.Fatalf("Não foi possivel converter '%v' para um inteiro", os.Args[3])
	}
	lados := []float64{ladoA, ladoB, ladoC}
	for _, resultado := range TiposTriangulo(lados) {
		fmt.Println(resultado)
	}

}
