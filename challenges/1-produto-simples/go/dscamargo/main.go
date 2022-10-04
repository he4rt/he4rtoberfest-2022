package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
)

func main() {
	cmdArgs := os.Args[1:]

	if len(cmdArgs) < 2 {
		log.Fatalln("Número insuficiente de argumentos")
	}

	fator1, err := strconv.Atoi(cmdArgs[0])
	if err != nil {
		log.Fatalln("Não foi possível converter '" + cmdArgs[0] + "' para inteiro")
	}

	fator2, err := strconv.Atoi(cmdArgs[1])
	if err != nil {
		log.Fatalln("Não foi possível converter '" + cmdArgs[1] + "' para inteiro")
	}

	fmt.Println(fmt.Sprintf("Produto: %v", fator1*fator2))
}
