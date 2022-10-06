package main

import (
	"fmt"
	"log"
)

func main() {
	var a int
	_, err := fmt.Scanln(&a)
	for i := 1; i <= a; i++ {
		fizzBuzz(i)
	}
	if err != nil {
		log.Fatal(err, "\tPlease use an integer!!!")
	}
}

func fizzBuzz(i int) {
	fizz := "fizz"
	buzz := "buzz"
	fizzBuzz := "fizz buzz"

	if i%3 == 0 && i%5 == 0 {
		fmt.Println(fizzBuzz)
	} else if i%3 == 0 {
		fmt.Println(fizz)
	} else if i%5 == 0 {
		fmt.Println(buzz)
	} else {
		fmt.Println(i)
	}
}
