package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	x, err := strconv.Atoi(os.Args[1])
	if err != nil || x <= 0 {
		fmt.Println("Erro no input.")
		os.Exit(1)
	}

	fmt.Println(strings.Join(getOutput(x), "\n"))
}

func getOutput(x int) []string {
	var output []string

	for i := 1; i < x+1; i++ {
		if i%3 == 0 && i%5 == 0 {
			output = append(output, "FizzBuzz")
			continue
		}
		if i%3 == 0 {
			output = append(output, "Fizz")
			continue
		}
		if i%5 == 0 {
			output = append(output, "Buzz")
			continue
		}
		if i%3 != 0 && i%5 != 0 {
			output = append(output, strconv.FormatInt(int64(i), 10))
			continue
		}
	}

	return output
}
