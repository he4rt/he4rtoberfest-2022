package main

import (
	"reflect"
	"testing"
)

func TestConverterSegundos(t *testing.T) {
	verificarSaidaTeste := func(t *testing.T, resultado, esperado []int) {
		t.Helper()
		if !reflect.DeepEqual(resultado, esperado) {
			t.Errorf("O resultado esperado era %v\nO resultado foi %v", esperado, resultado)
		}
	}

	t.Run("Caso 01: Converter Segundos", func(t *testing.T) {
		verificarSaidaTeste(t, ConverterSegundos(7650), []int{2, 7, 30})
	})

	t.Run("Caso 02: Converter Segundos", func(t *testing.T) {
		verificarSaidaTeste(t, ConverterSegundos(5800), []int{1, 36, 40})
	})
}
