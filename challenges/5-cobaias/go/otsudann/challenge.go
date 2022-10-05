package main

import (
    "fmt"
    s "strings"
)

func main(){

  //testeManual()
  testeAutomatico()

}

func testeManual(){
  var qtdTestes int
  var cobaia string
  var qtdCobaia float64
  var totalSapos float64
  var totalCoelhos float64
  var totalRatos float64

  fmt.Println("Quantos testes foram realizados?")
  fmt.Scan(&qtdTestes)

  for i := 0; i < qtdTestes; i++ {
    fmt.Printf("Teste: %v\n", i)
    fmt.Println("Insira 'quantidade cobaia' sendo cobaias R/S/C")
    fmt.Scan(&qtdCobaia, &cobaia)

    if s.ToUpper(cobaia) == "R"{
      totalRatos += qtdCobaia
    }else if s.ToUpper(cobaia) == "S"{
      totalSapos += qtdCobaia
    }else if s.ToUpper(cobaia) == "C"{
      totalCoelhos += qtdCobaia
    }
  }

  exibirTotal(totalRatos, totalSapos, totalCoelhos)
}

func testeAutomatico(){
  var qtdCobaiasArray = [10]float64{10, 6, 15, 5, 14, 9, 6, 8, 5, 14}
  var CobaiasArray = [10]string{"C", "R", "S", "C", "R", "C", "R", "S", "C", "R"}
  var totalSapos float64
  var totalCoelhos float64
  var totalRatos float64

  for i := 0; i < len(CobaiasArray); i++ {
    if s.ToUpper(CobaiasArray[i]) == "R"{
      totalRatos += qtdCobaiasArray[i]
    }else if s.ToUpper(CobaiasArray[i]) == "S"{
      totalSapos += qtdCobaiasArray[i]
    }else if s.ToUpper(CobaiasArray[i]) == "C"{
      totalCoelhos += qtdCobaiasArray[i]
    }
  }
  exibirTotal(totalRatos, totalSapos, totalCoelhos)
}

func exibirTotal(totalRatos float64, totalSapos float64, totalCoelhos float64){
  var totalCobaias float64
  totalCobaias = totalRatos + totalSapos + totalCoelhos

  fmt.Println("Total: \t\t\t", totalCobaias)
  fmt.Println("Total de coelhos: \t\t", totalCoelhos)
  fmt.Println("Total de ratos: \t\t", totalRatos)
  fmt.Println("Total de sapos: \t\t", totalSapos)
  fmt.Printf("Percentual de coelhos: \t%.2f%%\n", (totalCoelhos * 100) / totalCobaias)
  fmt.Printf("Percentual de ratos: \t%.2f%%\n", (totalRatos * 100) / totalCobaias)
  fmt.Printf("Percentual de sapos: \t%.2f%%\n", (totalSapos * 100) / totalCobaias)
}
