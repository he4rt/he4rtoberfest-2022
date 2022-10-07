package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	value, err := strconv.Atoi(os.Args[1])
	if err != nil {
		fmt.Println("Acounteceu um erro com o paramêtro informado: ", err)
	}
	years := value / 365
	months := (value % 365) / 30
	days := (value % 365) % 30
	fmt.Println(years, "ano(s)")
	fmt.Println(months, "mes(es)")
	fmt.Println(days, "dia(s)")
}
