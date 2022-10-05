package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
)

func main() {
	if len(os.Args) < 2 {
		log.Fatalln("Número de argumentos inválido")
	}

	daysNumber, err := strconv.Atoi(os.Args[1])
	if err != nil {
		log.Fatalln("Não foi possível converter o valor '" + os.Args[1] + "' para inteiro")
	}

	years := daysNumber / 365
	months := (daysNumber / 30) - (years * 12)
	if months < 0 {
		months = 0
	}
	days := daysNumber - (months * 30) - (years * 365)
	if days < 0 {
		days = 0
	}

	fmt.Printf("%v ano(s)\n", years)
	fmt.Printf("%v mes(es)\n", months)
	fmt.Printf("%v dia(s)\n", days)
}
