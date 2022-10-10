package main

import "fmt"

func main() {
	A, B, C := 0.0, 0.0, 0.0

	fmt.Print("Informe o lado A: ")
	fmt.Scan(&A)
	fmt.Print("Informe o lado B: ")
	fmt.Scan(&B)
	fmt.Print("Informe o lado C: ")
	fmt.Scan(&C)

	if !(A < (B+C) && B < (A+C) && C < (A+B)) {
		fmt.Println("Não forma um triângulo")
	} else {
			switch {
				case A == B && B == C:
					fmt.Println("Triângulo Equilátero")
				case A == B || A == C || B == C:
					fmt.Println("Triângulo Isósceles")
				case A + B > C || B + C > A || A + C > B:
					fmt.Println("Triângulo Retangulo")
				case A * A + A * A > (B * B + B * B + C * C + C * C):
					fmt.Println("Triângulo Obtusangulo")
				case A * A + A * A < (B * B + B * B + C * C + C * C):
					fmt.Println("Triângulo Acutangulo")
				default:
				fmt.Println("Triângulo Escaleno")
			} 
		}
}