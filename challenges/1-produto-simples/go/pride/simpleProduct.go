package main

import "fmt"

func main() {
	var a, b, sum1 int
	fmt.Print("First Number:")
	fmt.Scanf("%d", &a)
	fmt.Print("Second Number:")
	fmt.Scanf("%d", &b)
	sum1 = a * b
	fmt.Printf("Product Simple: %d * %d = %d\n", a, b, sum1)
}
