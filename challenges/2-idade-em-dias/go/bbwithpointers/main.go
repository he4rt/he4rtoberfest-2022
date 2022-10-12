package main

import (
	"fmt"
	"os"
	"strconv"
	"time"
)

func main() {
	idade, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println("parametro invalido: ", err)
	}
	anoAtual, _, _ := time.Now().Date()
	anoAproxNascimento := (anoAtual - idade) - 1
	ano := anoAtual - anoAproxNascimento
	mes := idade * 12
	dias := idade * 365
	fmt.Println(ano, "ano(s)")
	fmt.Println(mes, "meses")
	fmt.Println(dias, "dia(s)")

}
