package main

import (
	"fmt"
	"log"
	"math"
	"os"      // acessar os argumentos da linha de comando (igual em C, 0 é o nome)
	"strconv" // conversoes
)

type Cobaia struct {
	quantidadeCobaia int
	tipoCobaia       string
}

// Essa aqui é so pra dar certo na verificação do teste unitario
func roundFloat(val float64, precision uint) float64 {
	ratio := math.Pow(10, float64(precision))
	return math.Round(val*ratio) / ratio
}

func Cobaias(cobaias []Cobaia) (resultados []float64) {
	var (
		totalCobaias      float64
		totalCoelhos      float64
		totalRatos        float64
		totalSapos        float64
		percentualCoelhos float64
		percentualRatos   float64
		percentualSapos   float64
	)
	const (
		COELHO string = "C"
		RATOS  string = "R"
		SAPOS  string = "S"
	)

	for _, cobaia := range cobaias {
		switch cobaia.tipoCobaia {
		case COELHO:
			totalCoelhos += float64(cobaia.quantidadeCobaia)
		case RATOS:
			totalRatos += float64(cobaia.quantidadeCobaia)
		case SAPOS:
			totalSapos += float64(cobaia.quantidadeCobaia)
		}
		totalCobaias += float64(cobaia.quantidadeCobaia)
	}
	percentualCoelhos = (totalCoelhos * 100) / totalCobaias
	percentualRatos = (totalRatos * 100) / totalCobaias
	percentualSapos = (totalSapos * 100) / totalCobaias
	// Esse roundFloat aqui é so pra dar certo na verificação do teste unitario
	return []float64{totalCobaias, totalCoelhos, totalRatos, totalSapos,
		roundFloat(percentualCoelhos, 2), roundFloat(percentualRatos, 2), roundFloat(percentualSapos, 2)}
}

func main() {
	// chamada por argumento
	if len(os.Args) != 2 {
		fmt.Println("Número de argumentos informado é maior ou menor do que o necessário")
		return
	}
	// Atoi igual no C
	numeroTotal, err := strconv.Atoi(os.Args[1])
	if err != nil {
		log.Fatalf("Não foi possivel converter '%v' para um inteiro", os.Args[1])
	}
	var (
		quantidadeCobaia int
		tipoCobaia       string
		cobaias          []Cobaia
	)
	for i := 0; i < numeroTotal; i++ {
		fmt.Scanf("%d %s", &quantidadeCobaia, &tipoCobaia)
		cobaia := Cobaia{quantidadeCobaia, tipoCobaia}
		cobaias = append(cobaias, cobaia)
	}

	res := Cobaias(cobaias)

	fmt.Printf("Total: %.0f\n"+
		"Total de Coelhos: %.0f\n"+
		"Total de Ratos: %.0f\n"+
		"Total de Sapos: %.0f\n"+
		"Percentual de coelhos: %.2f%%\n"+
		"Percentual de ratos: %.2f%%\n"+
		"Percentual de sapos: %.2f%%\n",
		res[0], res[1], res[2], res[3], res[4], res[5], res[6])
}
