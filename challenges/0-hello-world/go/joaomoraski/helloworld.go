package main

import "fmt"

func HelloHeartoberfest(nome string) string {
	if nome == "" {
		return "Hello World!"
	}
	return "Hello " + nome + "!"
}

func main() {
	fmt.Println(HelloHeartoberfest("He4rtoberfest"))
}
