package main

import "fmt"

func ProdutoSimples(numero1, numero2 int) int {
	return numero1 * numero2
}

func main() {
	fmt.Printf("produto: %d\n", ProdutoSimples(10, 3))
	fmt.Printf("produto: %d\n", ProdutoSimples(5, 5))
}
