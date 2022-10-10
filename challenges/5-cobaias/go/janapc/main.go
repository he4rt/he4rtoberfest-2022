package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println("Qual a quantidade de testes:")
	var totalTests int
	fmt.Scan(&totalTests)
	totalMouse, totalFrogg, totalRabbit := questions(totalTests)
	showResponse(totalRabbit, totalMouse, totalFrogg)
}

func questions(totalTests int) (float64, float64, float64) {
	var totalMouse int
	var totalFrogg int
	var totalRabbit int
	for count := 1; count <= totalTests; count++ {
		var totalAnimals int
		var typeAnimal string
		fmt.Println("Qual a quantidade de cobaias e qual tipo: C(Coelho)/R(Rato)/S(Sapo)\nseparados por espaço: exemplo: 10 C")
		fmt.Scan(&totalAnimals, &typeAnimal)
		if typeAnimal == "C" {
			totalRabbit += totalAnimals
		} else if typeAnimal == "R" {
			totalMouse += totalAnimals
		} else if typeAnimal == "S" {
			totalFrogg += totalAnimals
		} else {
			fmt.Println("Tipo invalido, desculpe mais não podemos dar continuidade ao processo")
			os.Exit(0)
		}
	}
	fmt.Println("")
	return float64(totalMouse), float64(totalFrogg), float64(totalRabbit)
}

func showResponse(totalRabbit, totalMouse, totalFrogg float64) {
	totalAnimals := totalRabbit + totalMouse + totalFrogg
	fmt.Println("Total:", int(totalAnimals), "cobaias")
	fmt.Println("Total de coelhos:", int(totalRabbit))
	fmt.Println("Total de ratos:", int(totalMouse))
	fmt.Println("Total de sapos:", int(totalFrogg))
	fmt.Printf("Percentual de coelhos: %.2f %% \n", totalRabbit/totalAnimals*100)
	fmt.Printf("Percentual de ratos: %.2f %% \n", totalMouse/totalAnimals*100)
	fmt.Printf("Percentual de sapos: %.2f %% \n", totalFrogg/totalAnimals*100)
}
