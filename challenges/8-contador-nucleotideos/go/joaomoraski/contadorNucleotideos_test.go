package main

import (
	"reflect"
	"testing"
)

func TestContarNucleotideos(t *testing.T) {
	var (
		resultado1 = make(map[string]int)
		resultado2 = make(map[string]int)
	)

	verificarSaidaTeste := func(t *testing.T, resultado, esperado map[string]int) {
		t.Helper()
		if !reflect.DeepEqual(resultado, esperado) {
			t.Errorf("O resultado esperado era %v\nO resultado foi %v", esperado, resultado)
		}
	}

	resultado1["A"] = 3
	resultado1["C"] = 1
	resultado1["G"] = 1
	resultado1["T"] = 2
	t.Run("Caso 01: Contador Nucleotideos", func(t *testing.T) {
		verificarSaidaTeste(t, ContarNucleotideos("GATTACA"), resultado1)
	})

	resultado2["I"] = 1
	t.Run("Caso 02: Contador Nucleotideos", func(t *testing.T) {
		verificarSaidaTeste(t, ContarNucleotideos("INVALID"), resultado2)
	})
}
