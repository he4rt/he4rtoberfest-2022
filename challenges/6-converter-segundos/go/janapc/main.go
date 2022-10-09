package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	input, err := strconv.Atoi(os.Args[1])
	if err != nil {
		panic(err.Error())
	}
	hours := fmt.Sprintf("%02d", input/3600)
	minutes := fmt.Sprintf("%02d", input%3600/60)
	seconds := fmt.Sprintf("%02d", input%3600%60)
	fmt.Print(hours, ":", minutes, ":", seconds, "\n")
}
