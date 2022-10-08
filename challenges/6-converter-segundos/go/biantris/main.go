package main

import "fmt"

func main() {
    var i int

    fmt.Print("Digite um valor inteiro para ser convertido em (HH:MM:SS): ")
    fmt.Scanf("%d", &i)

	hours := i / 3600
	minutes := (i - hours * 3600) / 60
	secounds := (i - hours * 3600 - minutes * 60)

	fmt.Printf("%v : %v : %v\n", int(hours), minutes, secounds)
}