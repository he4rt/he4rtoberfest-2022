package main

import (
	"bufio"
	"errors"
	"fmt"
	"os"
	"strconv"
	"strings"
)

type resultado struct {
	cobaias            int
	sapos              int
	coelhos            int
	ratos              int
	porcentagemSapos   float64
	porcentagemCoelhos float64
	porcentagemRatos   float64
}

func getDadosTestes(numTestes int) (testes []string) {
	for i := 1; i <= numTestes; i++ {
		fmt.Printf("Teste %v: \n", i)
		scanner := bufio.NewScanner(os.Stdin)
		scanner.Scan()
		line := scanner.Text()
		testes = append(testes, line)
	}
	return
}

func calcTotalCobaias(testes []string) resultado {
	r := resultado{}

	for _, teste := range testes {
		fields := strings.Fields(teste)
		if len(fields) != 2 {
			continue
		}

		tipoCobaia := strings.ToUpper(fields[1])

		numCobaias, err := strconv.Atoi(fields[0])
		if err != nil {
			fmt.Println(errors.New("erro na conversão string para int"))
		}
		r.cobaias += numCobaias // calcula total de cobaias 

		switch tipoCobaia {
		case "S":
			r.sapos += numCobaias // calcula total de sapos
		case "C":
			r.coelhos += numCobaias // calcula total de coelhos
		case "R":
			r.ratos += numCobaias // calcula total de ratos
		default:
			continue
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
	fmt.Print("Digite o número de testes realizados: ")
	fmt.Scanln(&numTestes)

	teste := getDadosTestes(numTestes)
	t := calcTotalCobaias(teste)
	p := calcPorcentagem(t)
	printResultado(p)
}
