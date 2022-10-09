package main

import (
	"errors"
	"fmt"
	"math"
	"os"
	"sort"
	"strconv"
	"strings"
)

var errInvalidUserInput = errors.New("input invalido")

func main() {
	var ladosInput string
	fmt.Println("Digite os 3 lados, separados por vírgulas (ex: 1,2,3): ")
	fmt.Scanln(&ladosInput)

	lados, err := parseLadosToFloat(ladosInput)
	if err != nil {
		fmt.Printf("Erro no input.")
		os.Exit(1)
	}

	fmt.Println(strings.Join(detectaTiposDeTriangulos(lados), "\n"))
}

func parseLadosToFloat(ladosInput string) ([]float64, error) {
	lados := strings.Split(ladosInput, ",")
	if len(lados) != 3 {
		return nil, errInvalidUserInput
	}

	ladosFloat := make([]float64, len(lados))

	for i, lado := range lados {
		f, err := strconv.ParseFloat(lado, 64)
		if err != nil {
			return nil, errInvalidUserInput
		}
		ladosFloat[i] = f
	}

	return ladosFloat, nil
}

func detectaTiposDeTriangulos(lados []float64) []string {
	sort.Sort(sort.Reverse(sort.Float64Slice(lados)))

	var tiposTriangulo []string

	if lados[0] >= lados[1]+lados[2] {
		tiposTriangulo = append(tiposTriangulo, "NAO FORMA TRIANGULO")
		return tiposTriangulo
	}

	expA := math.Exp2(lados[0])
	expBPlusExpC := math.Exp2(lados[1]) + math.Exp2(lados[2])

	if expA == expBPlusExpC {
		tiposTriangulo = append(tiposTriangulo, "TRIANGULO RETANGULO")
	}

	if expA > expBPlusExpC {
		tiposTriangulo = append(tiposTriangulo, "TRIANGULO OBTUSANGULO")
	}

	if expA < expBPlusExpC {
		tiposTriangulo = append(tiposTriangulo, "TRIANGULO ACUTANGULO")
	}

	if (lados[0] == lados[1]) && (lados[0] == lados[2]) && (lados[1] == lados[2]) {
		tiposTriangulo = append(tiposTriangulo, "TRIANGULO EQUILATERO")
	}

	if (lados[0] == lados[1] && lados[0] != lados[2]) || (lados[0] == lados[2] && lados[0] != lados[1]) || (lados[1] == lados[2] && lados[1] != lados[0]) {
		tiposTriangulo = append(tiposTriangulo, "TRIANGULO ISOSCELES")
	}

	return tiposTriangulo
}
