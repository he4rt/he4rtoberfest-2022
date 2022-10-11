package main 

import (
	"fmt"
	"os"
	"strconv" 
)

func convertInputStrToInt(param string) int {
	number, err := strconv.Atoi(param)
	if err != nil {
		panic(err)
	}
	return number
}

func main() { 
	fmt.Println(convertInputStrToInt(os.Args[1]) * convertInputStrToInt(os.Args[2]))
}
