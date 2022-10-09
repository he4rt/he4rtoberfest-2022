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

	sizeNumber, err := strconv.Atoi(os.Args[1])
	if err != nil {
		log.Fatalln("Não foi possível converter o argumento " + os.Args[1] + " para inteiro")
	}

	fmt.Println("Saída:")
	fmt.Println("------------")
	for i := 1; i <= sizeNumber; i++ {
		valueAppend := strconv.Itoa(i)

		if i%3 == 0 && i%5 == 0 {
			valueAppend = "FizzBuzz"
		} else if i%3 == 0 {
			valueAppend = "Fizz"
		} else if i%5 == 0 {
			valueAppend = "Buzz"
		}

		fmt.Println(valueAppend)
	}
}
