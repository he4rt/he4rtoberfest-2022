package main

import (
	"fmt"
)

func main() {
	var idadeEmDias int

	fmt.Println("Informe a idade em dias.")
	fmt.Scan(&idadeEmDias)

	anos := idadeEmDias / 365
	if anos < 0 {
		anos = 0
	}
	meses := (idadeEmDias - (anos * 365)) / 30
	if meses < 0 {
		meses = 0
	}
	dias := idadeEmDias - (meses * 30) - (anos * 365)
	if dias < 0 {
		dias = 0
	}

	fmt.Printf("%d ano(os)\n%d mes(es)\n%d dia(as) \n", anos, meses, dias)

}
