package main

import "fmt"

func main() {
	var idade int

	fmt.Print("Idade em dias: ")
	fmt.Scan(&idade)

	anos := idade / 365
	meses := (idade % 365) / 30
	dias := (idade % 365) % 30

	fmt.Printf("%v ano(s) \n%v mes(es) \n%v dia(s)", int(anos), meses, dias)
}
