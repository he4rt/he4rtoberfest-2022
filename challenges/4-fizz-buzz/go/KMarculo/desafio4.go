package main

import (
	"fmt"
)

func main() {
	var numMax int
	fmt.Printf("Digite um numero inteiro\n")
	fmt.Scan(&numMax)

	for i := 1; i <= numMax; i++ {
		if i%3 == 0 && i%5 == 0 {
			fmt.Printf("FizzBuzz\n")
		} else if i%3 == 0 {
			fmt.Printf("Fizz\n")
		} else if i%5 == 0 {
			fmt.Printf("Buzz\n")
		} else {
			fmt.Printf("%d\n", i)
		}
	}
}
