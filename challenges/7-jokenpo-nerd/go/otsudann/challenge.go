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
  var rajesh string
  var sheldon string
  var qtdJogadas int

  fmt.Println("Opções: pedra papel tesoura lagarto spock")
  fmt.Println("Insira numero de jogadas:")
  fmt.Scan(&qtdJogadas)

  for i := 0; i < qtdJogadas; i++ {
    fmt.Println("Jogada ", i + 1)
    fmt.Println("Insira a jogada de Rajesh e Sheldon respectivamente: ")
    fmt.Scan(&rajesh, &sheldon)

    rajesh = s.ToLower(rajesh)
    sheldon = s.ToLower(sheldon)

    if rajesh == sheldon {
      fmt.Println("empate")
    }else if rajesh == "tesoura" && (sheldon == "papel" || sheldon == "lagarto"){
      fmt.Println("rajesh")
    }else if rajesh == "papel" && (sheldon == "pedra" || sheldon == "spock"){
      fmt.Println("rajesh")
    }else if rajesh == "pedra" && (sheldon == "tesoura" || sheldon == "lagarto"){
      fmt.Println("rajesh")
    }else if rajesh == "lagarto" && (sheldon == "spock" || sheldon == "papel"){
      fmt.Println("rajesh")
    }else if rajesh == "spock" && (sheldon == "tesoura" || sheldon == "pedra"){
      fmt.Println("rajesh")
    }else {
      fmt.Println("sheldon")
    }

  }
}
func testeAutomatico(){
  var rajesh = [3]string{"spock", "tesoura", "lagarto"}
  var sheldon = [3]string{"spock", "spock", "spock"}

  fmt.Println("Opções: pedra papel tesoura lagarto spock")

  for i := 0; i < len(rajesh); i++ {
    fmt.Println("Jogada ", i + 1)

    if rajesh[i] == sheldon[i] {
      fmt.Println("empate")
    }else if rajesh[i] == "tesoura" && (sheldon[i] == "papel" || sheldon[i] == "lagarto"){
      fmt.Println("rajesh")
    }else if rajesh[i] == "papel" && (sheldon[i] == "pedra" || sheldon[i] == "spock"){
      fmt.Println("rajesh")
    }else if rajesh[i] == "pedra" && (sheldon[i] == "tesoura" || sheldon[i] == "lagarto"){
      fmt.Println("rajesh")
    }else if rajesh[i] == "lagarto" && (sheldon[i] == "spock" || sheldon[i] == "papel"){
      fmt.Println("rajesh")
    }else if rajesh[i] == "spock" && (sheldon[i] == "tesoura" || sheldon[i] == "pedra"){
      fmt.Println("rajesh")
    }else {
      fmt.Println("sheldon")
    }
  }
}
