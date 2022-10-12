package main

import (
	"errors"
	"fmt"
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

func calcResultado(inputs []string) resultado {
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

func main() {
	input := []string{"10", "10 C", "6 R", "15 S", "5 C", "14 R", "9 C", "6 R", "8 S", "5 C", "14 R"}
	r := calcResultado(input)
	fmt.Printf("Resultado: %#v\n", r)
	p := calcPorcentagem(r)
	fmt.Printf("Porcentagens: %#v\n", p)

}
