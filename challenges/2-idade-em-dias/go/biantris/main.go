package main

import "fmt"

func main() {
    var age int

    fmt.Print("Digite uma idade em dias: ")
    fmt.Scanf("%d", &age)

	years := age / 365
	months := (age % 365) / 30
	days := (age % 365) % 30

	fmt.Printf("%v ano(s)\n", years)
	fmt.Printf("%v mes(es)\n", months)
	fmt.Printf("%v dia(s)\n", days)
}