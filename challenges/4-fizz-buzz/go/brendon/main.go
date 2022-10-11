package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	in, err := strconv.Atoi(os.Args[1])
	if err != nil {
		panic(err) 
	}

	for i := 1; i <= in; i++ {	
		if i % 3 == 0 && i % 5 == 0 {
			fmt.Println("FizzBuzz")
			continue
		}
		if i % 3 == 0 {
			fmt.Println("Fizz")
			continue
		}
		if i % 5 == 0 {
			fmt.Println("Buzz")
			continue
		}
		
		fmt.Println(fmt.Sprintf("%d", i))
	}
}

