package main

import (
	"fmt"
	"os"
	"strconv"
	"sort"
)

func main() {
	inputs := []float64{}

	for _, i := range []int{1,2,3} {
		inputs = append(inputs, parseStrToFloat(os.Args[i]))
	}
	sort.Float64s(inputs)

	output := ""

	if inputs[2] >= inputs[1] + inputs[0] {
		output += "NAO FORMA TRIANGULO\n"
	} else {
		if square(inputs[2]) == square(inputs[1]) + square(inputs[0]) {
			output += "TRIANGULO RETANGULO\n"
		} else if square(inputs[2]) > square(inputs[1]) + square(inputs[0]) {
			output += "TRIANGULO OBTUSANGULO\n"
		} else if square(inputs[2]) < square(inputs[1]) + square(inputs[0]) {
			output += "TRIANGULO ACUTANGULO\n" 
		}

		if inputs[2] == inputs[1] && inputs[1] == inputs[0] {
			output += "TRIANGULO EQUILATERO\n"
		} else if inputs[2] == inputs[1] || inputs[1] == inputs[0] {
			output += "TRIANGULO ISOSCELES\n" 
		}
	}

	fmt.Print(output)
}

func parseStrToFloat(param string) float64 {  
	v, err := strconv.ParseFloat(param, 8)
	if err != nil {
		panic(err)
	}
	return v
}

func square(v float64) float64 {
	return v * v 
}

