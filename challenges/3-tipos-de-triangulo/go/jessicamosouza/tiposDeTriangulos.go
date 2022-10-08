package main

import (
	"fmt"
	"math"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {

	var ladosInput string
	fmt.Println("Digite os 3 lados, separados por vírgulas (ex: 1,2,3): ")
	fmt.Scanln(&ladosInput)

	lados := parseLadosToFloat(ladosInput)

	sortLados(lados)

	printTripoDoTriangulo(lados)

}

func parseLadosToFloat(ladosInput string) []float64 {
	var (
		lados        = make([]string, 3)
		ladosToFloat = make([]float64, 3)
	)

	for i := 0; i < 3; i++ {
		lados = strings.Split(ladosInput, ",")

		f, err := strconv.ParseFloat(lados[i], 64)
		if err != nil {
			fmt.Printf("Erro no %vº input.\n", i+1)
			os.Exit(1)
		}

		ladosToFloat[i] = f
	}

	return ladosToFloat
}

func sortLados(lados []float64) []float64 {
	sort.Sort(sort.Reverse(sort.Float64Slice(lados)))

	return lados
}

func printTripoDoTriangulo(lados []float64) {

	if lados[0] >= lados[1]+lados[2] {
		fmt.Println("NAO FORMA TRIANGULO")
	} else {
		if math.Exp2(lados[0]) == math.Exp2(lados[1])+math.Exp2(lados[2]) {
			fmt.Println("TRIANGULO RETANGULO")
		}

		if math.Exp2(lados[0]) > math.Exp2(lados[1])+math.Exp2(lados[2]) {
			fmt.Println("TRIANGULO OBTUSANGULO")
		}

		if math.Exp2(lados[0]) < math.Exp2(lados[1])+math.Exp2(lados[2]) {
			fmt.Println("TRIANGULO ACUTANGULO")
		}

		if (lados[0] == lados[1]) && (lados[0] == lados[2]) && (lados[1] == lados[2]) {
			fmt.Println("TRIANGULO EQUILATERO")
		}

		if (lados[0] == lados[1] && lados[0] != lados[2]) || (lados[0] == lados[2] && lados[0] != lados[1]) || (lados[1] == lados[2] && lados[1] != lados[0]) {
			fmt.Println("TRIANGULO ISOSCELES")
		}
	}
}
