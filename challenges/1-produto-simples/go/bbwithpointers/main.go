package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	productOne, _ := strconv.Atoi(os.Args[1])
	productTwo, _ := strconv.Atoi(os.Args[2])
	PROD := productOne * productTwo
	fmt.Println("produto:", PROD)
}
