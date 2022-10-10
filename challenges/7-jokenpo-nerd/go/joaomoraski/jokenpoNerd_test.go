package main

import (
	"reflect"
	"testing"
)

func TestJokenpoNerd(t *testing.T) {
	// Preenchimento do array de jogadas
	var (
		quantidadeCasos int      = 3
		jogadas1        []string = []string{"spock", "tesoura", "lagarto"}
		jogadas2        []string = []string{"spock", "spock", "spock"}
		jogadas         []Jogadas
	)
	for i := 0; i < quantidadeCasos; i++ {
		jogadas = append(jogadas, Jogadas{jogadas1[i], jogadas2[i]})
	}

	verificarSaidaTeste := func(t *testing.T, resultado, esperado []string) {
		t.Helper()
		if !reflect.DeepEqual(resultado, esperado) {
			t.Errorf("O resultado esperado era %v\nO resultado foi %v", esperado, resultado)
		}
	}

	t.Run("Caso 01: Jokenpo Nerd", func(t *testing.T) {
		verificarSaidaTeste(t, JokenpoNerd(jogadas),
			[]string{"empate", "sheldon", "rajesh"})
	})
}
