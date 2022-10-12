package main

import (
	"fmt"
	"strconv"
)

func ConvSegundos(s int) string {
	SToH := s % 3600
	horas := s / 3600
	minutos := SToH / 60
	segundos := SToH % 60

	horasString := strconv.Itoa(horas)
	minutosString := strconv.Itoa(minutos)
	segundosString := strconv.Itoa(segundos)

	r := horasString + ":" + minutosString + ":" + segundosString

	fmt.Println(r)

	return r
}

func main() {
	ConvSegundos(7650)
}
