package main

import (
	"reflect"
	"testing"
)

func TestTiposTriangulo(t *testing.T) {
	// Preenchimento do array de cobaia
	var (
		quantidadeCasos int      = 10
		numeroCasos     []int    = []int{10, 6, 15, 5, 14, 9, 6, 8, 5, 14}
		tipoCasos       []string = []string{"C", "R", "S", "C", "R", "C", "R", "S", "C", "R"}
		cobaias         []Cobaia
	)
	for i := 0; i < quantidadeCasos; i++ {
		cobaias = append(cobaias, Cobaia{numeroCasos[i], tipoCasos[i]})
	}

	// funçao para verificar a saida do teste
	verificarSaidaTeste := func(t *testing.T, resultado, esperado []float64) {
		t.Helper()
		if !reflect.DeepEqual(resultado, esperado) {
			t.Errorf("O resultado esperado era %v\nO resultado foi %v", esperado, resultado)
		}
	}

	t.Run("Caso 01: Cobaias", func(t *testing.T) {
		verificarSaidaTeste(t, Cobaias(cobaias), []float64{92, 29, 40, 23, 31.52, 43.48, 25.00})
	})

}
