package main

import (
	"fmt"
	"os"
	"strconv" 
)

func main() {
	daysOfLife, err := strconv.Atoi(os.Args[1])
	if err != nil {
		panic(err)
	}
	nYears := daysOfLife/365
	daysOfLife = daysOfLife % 365

	nMonths := daysOfLife/30
	daysOfLife = daysOfLife % 30

	fmt.Println(fmt.Sprintf("%d", nYears) + " ano(s)")
	fmt.Println(fmt.Sprintf("%d", nMonths) + " mes(es)")
	fmt.Println(fmt.Sprintf("%d", daysOfLife) + " dia(s)")
}
