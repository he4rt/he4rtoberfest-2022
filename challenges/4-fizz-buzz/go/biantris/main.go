package main

import ( 
	"fmt" 
)

func main() {

	var input int
	fmt.Print("Digite um número inteiro: ")
	fmt.Scanf("%d", &input)
	
	for i := 1; i <= input; i++ {
		fizzbuzz(i)	
	}
}

func fizzbuzz(i int) {
	fizz := "Fizz"
	buzz := "Buzz"
	
	if i % 3 == 0 && i % 5 == 0 {
		fmt.Println(i, fizz + buzz)
	} else if i % 3 == 0 {
		fmt.Println(i, fizz)
	} else if i % 5 == 0 {
		fmt.Println(i, buzz)
	} else {
		fmt.Println(i)
	}
}