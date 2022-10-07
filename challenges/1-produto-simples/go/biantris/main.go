package main

import "fmt"

func main() {
    var inpt1, inpt2 int

    fmt.Print("Digite seu input1: ")
    fmt.Scanf("%d", &inpt1)
    fmt.Print("Digite seu input2: ")
    fmt.Scanf("%d", &inpt2)
	fmt.Printf("Produto: %#v\n", (inpt1 * inpt2))
}