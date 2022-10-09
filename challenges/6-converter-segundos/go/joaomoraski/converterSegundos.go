package main

import (
	"fmt"
	"log"
	"os"      // acessar os argumentos da linha de comando (igual em C, 0 é o nome)
	"strconv" // conversoes
)

func ConverterSegundos(totalSegundos int) (resultado []int) {
	horas := totalSegundos / 3600
	minutos := (totalSegundos - horas*3600) / 60
	segundos := (totalSegundos - horas*3600 - minutos*60)
	resultado = append(resultado, horas)
	resultado = append(resultado, minutos)
	resultado = append(resultado, segundos)
	return
}

func main() {
	// chamada por argumento
	if len(os.Args) != 2 {
		fmt.Println("Número de argumentos informado é maior ou menor do que o necessário")
		return
	}
	// Atoi igual no C
	totalSegundos, err := strconv.Atoi(os.Args[1])
	if err != nil {
		log.Fatalf("Não foi possivel converter '%v' para um inteiro", os.Args[1])
	}
	res := ConverterSegundos(totalSegundos)
	fmt.Printf("%v:%v:%v\n", int(res[0]), int(res[1]), int(res[2]))
}
