package main

import (
	"fmt"
	"log"
	"os"      // acessar os argumentos da linha de comando (igual em C, 0 é o nome)
	"strconv" // conversoes
)

func IdadeEmDias(idadeEmDias int) (ano, meses, dias int) {
	ano = int(idadeEmDias / 365)
	meses = int((idadeEmDias - (ano * 365)) / 30)
	dias = int((idadeEmDias - (ano * 365) - (meses * 30)))
	return
}

func main() {
	// chamada por argumento
	if len(os.Args) != 2 {
		fmt.Println("Número de argumentos informado é maior ou menor do que o necessário")
		return
	}
	// Atoi igual no C
	idadeEmDias, err := strconv.Atoi(os.Args[1])
	if err != nil {
		log.Fatalf("Não foi possivel converter '%v' para um inteiro", os.Args[1])
	}
	ano, mes, dia := IdadeEmDias(idadeEmDias)
	fmt.Printf("%d ano(s)\n%d mes(es)\n%d dia(s)\n", ano, mes, dia)
}
