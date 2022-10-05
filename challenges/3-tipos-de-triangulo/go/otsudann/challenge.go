package main

import (
    "fmt"
    m "math"
)

func main(){
  var ladosTriangulo = []float64{0.0, 0.0, 0.0}
  var posicao int = 0
  var ladoA float64 = 0.0
  var ladoB float64 = 0.0
  var ladoC float64 = 0.0

  fmt.Println("Insira os tres lados de um triangulo separados por um espaço:")
  fmt.Scan(&ladosTriangulo[0], &ladosTriangulo[1], &ladosTriangulo[2])

  // Definir o maior valor como o lado A
  for index, valor := range ladosTriangulo {
    if valor >= ladoA {
      ladoA = valor
      posicao = index
    }
  } 

  // Remover o valor de ladoA pela posicao do array
  ladosTriangulo = RemoverIndex(ladosTriangulo, posicao)
  ladoB = ladosTriangulo[0]
  ladoC = ladosTriangulo[1]

  if ladoA >= (ladoB + ladoC){
    fmt.Println("NAO FORMA TRIANGULO")
  }
  if m.Pow(ladoA, 2) == (m.Pow(ladoB, 2) + m.Pow(ladoC, 2)){
    fmt.Println("TRIANGULO RETANGULO")
  }
  if m.Pow(ladoA, 2) > (m.Pow(ladoB, 2) + m.Pow(ladoC, 2)){
    fmt.Println("TRIANGULO OBTUSANGULO")
  }
  if m.Pow(ladoA, 2) < (m.Pow(ladoB, 2) + m.Pow(ladoC, 2)){
    fmt.Println("TRIANGULO ACUTANGULO")
  }
  if ladoA == ladoB && ladoB == ladoC {
    fmt.Println("TRIANGULO EQUILATERO")
  }else if ladoA == ladoB || ladoB == ladoC || ladoC == ladoA {
    fmt.Println("TRIANGULO ISOSCELES")
  }
}

func RemoverIndex(s []float64, index int) []float64 {
  return append(s[:index], s[index+1:]...)
}
