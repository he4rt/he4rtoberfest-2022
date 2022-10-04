package main

import (
    "fmt"
    m "math"
)

func main(){
  var idade float64
  var dias float64
  var meses float64
  var anos float64

  fmt.Println("Insira uma idade em dias:")
  fmt.Scan(&idade)

  anos = m.Floor(idade / 365)
  meses = m.Floor(m.Mod(idade, 365) / 30)
  dias = m.Mod(m.Mod(idade, 365), 30)

  fmt.Printf("Anos: %v\n", anos)
  fmt.Printf("Meses: %v\n", meses)
  fmt.Printf("Dias: %v\n", dias)
}
