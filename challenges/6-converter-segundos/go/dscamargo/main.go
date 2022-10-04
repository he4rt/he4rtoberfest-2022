package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"time"
)

func main() {
	var t time.Time // Zero time
	if len(os.Args) < 2 {
		log.Fatalln("Número de argumentos inválido")
	}

	secondsNumber, err := strconv.Atoi(os.Args[1])
	if err != nil {
		log.Fatalln("Não foi possível converter o valor '" + os.Args[1] + "' para inteiro")
	}

	ms := int64(secondsNumber * 1000)
	t = t.Add(time.Duration(ms) * time.Millisecond)
	fmt.Println(t.Format("15:04:05"))
}
