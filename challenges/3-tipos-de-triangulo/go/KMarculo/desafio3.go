package main

import (
	"fmt"
	"math"
	"sort"
)

func main() {
	triangulo := make([]float64, 4)
	fmt.Println("Digite o tamanho dos tres lados do traingulo")
	fmt.Scan(&triangulo[0], &triangulo[1], &triangulo[2])
	fmt.Printf("Entrada: %.2f %.2f %.2f\n", triangulo[0], triangulo[1], triangulo[2])
	//Organiza os valores da slice de maior para menor
	sort.Sort(sort.Reverse(sort.Float64Slice(triangulo)))
	if triangulo[0] >= (triangulo[1] + triangulo[2]) {
		fmt.Printf("NAO FORMA TRIANGULO\n")
	} else {
		if (math.Pow(triangulo[0], 2)) == (math.Pow(triangulo[1], 2) + (math.Pow(triangulo[2], 2))) {
			fmt.Printf("TRIANGULO RETANGULO\n")
		}
		if (math.Pow(triangulo[0], 2)) > (math.Pow(triangulo[1], 2) + (math.Pow(triangulo[2], 2))) {
			fmt.Printf("TRIANGULO OBTUSANGULO\n")
		}
		if (math.Pow(triangulo[0], 2)) < (math.Pow(triangulo[1], 2) + (math.Pow(triangulo[2], 2))) {
			fmt.Printf("TRIANGULO ACUTANGULO\n")
		}
		if triangulo[0] == triangulo[1] && triangulo[1] == triangulo[2] {
			fmt.Printf("TRIANGULO EQUILATERO\n")
		} else if triangulo[0] == triangulo[1] || triangulo[1] == triangulo[2] || triangulo[2] == triangulo[0] {
			fmt.Printf("TRIANGULO ISOSCELES\n")
		}
	}
}
