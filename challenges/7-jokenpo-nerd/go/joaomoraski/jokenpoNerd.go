package main

import (
	"fmt"
	"log"
	"os"      // acessar os argumentos da linha de comando (igual em C, 0 é o nome)
	"strconv" // conversoes
	"strings"
)

type Jogadas struct {
	jogada1 string
	jogada2 string
}

const (
	TESOURA string = "tesoura"
	PAPEL   string = "papel"
	PEDRA   string = "pedra"
	SPOCK   string = "spock"
	LAGARTO string = "lagarto"
)

func JokenpoNerd(jogadas []Jogadas) (resultado []string) {
	for _, jogada := range jogadas {
		if jogada.jogada1 == jogada.jogada2 {
			resultado = append(resultado, "empate")
		} else if jogada.jogada1 == TESOURA && (jogada.jogada2 == PAPEL || jogada.jogada2 == LAGARTO) {
			resultado = append(resultado, "rajesh")
		} else if jogada.jogada1 == PAPEL && (jogada.jogada2 == PEDRA || jogada.jogada2 == SPOCK) {
			resultado = append(resultado, "rajesh")
		} else if jogada.jogada1 == PEDRA && (jogada.jogada2 == LAGARTO || jogada.jogada2 == TESOURA) {
			resultado = append(resultado, "rajesh")
		} else if jogada.jogada1 == LAGARTO && (jogada.jogada2 == SPOCK || jogada.jogada2 == PAPEL) {
			resultado = append(resultado, "rajesh")
		} else if jogada.jogada1 == SPOCK && (jogada.jogada2 == TESOURA || jogada.jogada2 == PEDRA) {
			resultado = append(resultado, "rajesh")
		} else {
			resultado = append(resultado, "sheldon")
		}
	}

	return
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
		jogada1 string
		jogada2 string
		jogadas []Jogadas
	)

	for i := 0; i < numeroTotal; i++ {
		fmt.Scanf("%s %s", &jogada1, &jogada2)
		jogada := Jogadas{strings.ToLower(jogada1), strings.ToLower(jogada2)}
		jogadas = append(jogadas, jogada)
	}

	for _, resul := range JokenpoNerd(jogadas) {
		fmt.Println(resul)
	}
}
