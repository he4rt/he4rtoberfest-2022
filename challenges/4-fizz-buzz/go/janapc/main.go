package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	input, err := strconv.Atoi(os.Args[1])
	if err != nil {
		panic(err.Error())
	}
	var message []string
	for count := 1; count <= input; count++ {
		if count%5 == 0 && count%3 == 0 {
			message = append(message, "FizzBuzz")
		} else if count%3 == 0 {
			message = append(message, "Fizz")
		} else if count%5 == 0 {
			message = append(message, "Buzz")
		} else {
			message = append(message, strconv.Itoa(count))
		}
	}
	fmt.Println(strings.Join(message, "\n"))
}
