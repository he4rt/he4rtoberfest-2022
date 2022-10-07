package main

import (
	"fmt"
	"os"
	"sort"
	"strconv"
)

func main() {
	var args []float64
	for _, arg := range os.Args[1:] {
		value, err := strconv.ParseFloat(arg, 64)
		if err != nil {
			panic(err)
		}
		args = append(args, value)
	}
	sort.Slice(args, func(i, j int) bool {
		return args[i] > args[j]
	})
	argA := args[0]
	argB := args[1]
	argC := args[2]
	if argA < 0 || argB < 0 || argC < 0 {
		fmt.Println("Os valores não podem ser menor que 0")
	}
	if argA >= argB+argC {
		fmt.Println("NAO FORMA TRIANGULO")
	} else if argA*argA == argB*argB+argC*argC {
		fmt.Println("TRIANGULO RETANGULO")
	} else if argA*argA > argB*argB+argC*argC {
		fmt.Println("TRIANGULO OBTUSANGULO")
	} else if argA*argA < argB*argB+argC*argC {
		fmt.Println("TRIANGULO ACUTANGULO")
	}
	if argA == argB && argB == argC {
		fmt.Println("TRIANGULO EQUILATERO")
	} else if argA == argB || argB == argC {
		fmt.Println("TRIANGULO ISOSCELES")
	}
}
