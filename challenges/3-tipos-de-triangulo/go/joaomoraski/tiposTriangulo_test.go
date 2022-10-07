package main

import (
	"reflect"
	"testing"
)

func TestTiposTriangulo(t *testing.T) {
	verificarSaidaTeste := func(t *testing.T, resultado, esperado []string) {
		t.Helper()
		if !reflect.DeepEqual(resultado, esperado) {
			t.Errorf("O resultado esperado era %v\nO resultado foi %v", esperado, resultado)
		}
	}

	t.Run("Caso 01: Tipos de triangulo", func(t *testing.T) {
		verificarSaidaTeste(t, TiposTriangulo([]float64{7.0, 5.0, 7.0}), []string{"TRIANGULO ACUTANGULO", "TRIANGULO ISOSCELES"})
	})

	t.Run("Caso 02: Tipos de triangulo", func(t *testing.T) {
		verificarSaidaTeste(t, TiposTriangulo([]float64{6.0, 6.0, 10.0}), []string{"TRIANGULO OBTUSANGULO", "TRIANGULO ISOSCELES"})
	})

	t.Run("Caso 03: Tipos de triangulo", func(t *testing.T) {
		verificarSaidaTeste(t, TiposTriangulo([]float64{6.0, 6.0, 6.0}), []string{"TRIANGULO ACUTANGULO", "TRIANGULO EQUILATERO"})
	})

	t.Run("Caso 04: Tipos de triangulo", func(t *testing.T) {
		verificarSaidaTeste(t, TiposTriangulo([]float64{5.0, 7.0, 2.0}), []string{"NAO FORMA TRIANGULO"})
	})
}
