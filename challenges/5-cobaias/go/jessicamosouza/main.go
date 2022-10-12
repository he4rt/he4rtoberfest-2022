package main

import (
	"bufio"
	"errors"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// var errInvalidUserInput = errors.New("input sem indicação do cobaia")

type resultado struct {
	cobaias            int
	sapos              int
	coelhos            int
	ratos              int
	porcentagemSapos   float64
	porcentagemCoelhos float64
	porcentagemRatos   float64
}

func calcTotalCobaias(inputs []string) resultado {
	r := resultado{}

	for _, input := range inputs {
		fields := strings.Fields(input)
		if len(fields) != 2 {
			continue
		}

		tipoCobaia := fields[1]
		if len(tipoCobaia) == 0 {
			continue
		}

		numCobaias, err := strconv.Atoi(fields[0])
		if err != nil {
			fmt.Println(errors.New("erro na conversão string para int no splitInput"))
		}
		r.cobaias += numCobaias

		switch tipoCobaia {
		case "S":
			r.sapos += numCobaias
		case "C":
			r.coelhos += numCobaias
		case "R":
			r.ratos += numCobaias
		}
	}

	return r

}

func calcPorcentagem(r resultado) resultado {

	r.porcentagemCoelhos = (float64(r.coelhos) * 100) / float64(r.cobaias)
	r.porcentagemSapos = (float64(r.sapos) * 100) / float64(r.cobaias)
	r.porcentagemRatos = (float64(r.ratos) * 100) / float64(r.cobaias)

	return r
}

func printResultado(r resultado) {
	fmt.Printf("Total: %v cobaias\n", r.cobaias)
	fmt.Printf("Total de coelhos:: %v\n", r.coelhos)
	fmt.Printf("Total de ratos:: %v\n", r.ratos)
	fmt.Printf("Total de sapos:: %v\n", r.sapos)
	fmt.Printf("Percentual de coelhos: %.2f%%\n", r.porcentagemCoelhos)
	fmt.Printf("Percentual de ratos: %.2f%%\n", r.porcentagemRatos)
	fmt.Printf("Percentual de sapos: %.2f%%\n", r.porcentagemSapos)
}

func main() {
	var numTestes int
	var line string
	var teste []string
	fmt.Print("Digite o número de testes realizados: ")
	fmt.Scanln(&numTestes)

	for i := 1; i <= numTestes; i++ {
		fmt.Printf("Teste %v: \n", i)
		scanner := bufio.NewScanner(os.Stdin)
		scanner.Scan()
		line = scanner.Text()
		teste = append(teste, line)
	}

	r := calcTotalCobaias(teste)
	p := calcPorcentagem(r)
	printResultado(p)

}
