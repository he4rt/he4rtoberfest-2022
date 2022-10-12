package main

import (
	"fmt"
	"os"
	"strconv"
)

func ConvSegundos(s int) string {
	horas := s / 3600
	minutos := s % 3600 / 60
	segundos := s % 3600 % 60

	sHora := fmt.Sprintf("%02d", horas)
	sMinutos := fmt.Sprintf("%02d", minutos)
	sSegundos := fmt.Sprintf("%02d", segundos)

	return sHora + ":" + sMinutos + ":" + sSegundos
}

func main() {
	segundos, err := strconv.Atoi(os.Args[1])
	if err != nil || segundos <= 0 {
		fmt.Println("Erro no input.")
		os.Exit(1)
	}

	fmt.Println(ConvSegundos(segundos))
}
