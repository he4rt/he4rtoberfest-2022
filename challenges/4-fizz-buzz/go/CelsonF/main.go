package main

import (
	"fmt"
)

func main() {
	var numberMulti uint

	fmt.Println("Insira um número inteiro para verificar se são:\nmultiplos de 3(Fizz), 5(Buzz) e ao ambos(FizzBuzz):")
	fmt.Scan(&numberMulti)

	fmt.Println("\nSaída:")

	for i := 1; i <= int(numberMulti); i++ {
		if (i % 3) == 0 {
			fmt.Println("Fizz")
		}
		if (i % 5) == 0 {
			fmt.Println("Buzz")
		}
		if (i%3) == 0 && (i%5) == 0 {
			fmt.Println("FizzBuzz")
		} else {
			fmt.Println(i)
		}
	}

}
