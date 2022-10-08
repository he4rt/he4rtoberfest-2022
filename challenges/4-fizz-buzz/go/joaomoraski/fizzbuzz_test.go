package main

import (
	"reflect"
	"testing"
)

func TestFizzBuzz(t *testing.T) {
	verificarSaidaTeste := func(t *testing.T, resultado, esperado []string) {
		t.Helper()
		if !reflect.DeepEqual(resultado, esperado) {
			t.Errorf("O resultado esperado era %v\nO resultado foi %v", esperado, resultado)
		}
	}

	t.Run("Caso 01: Fizz Buzz", func(t *testing.T) {
		verificarSaidaTeste(t, FizzBuzz(16),
			[]string{"1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz",
				"Buzz", "11", "Fizz", "13", "14", "FizzBuzz", "16"})
	})

	t.Run("Caso 02: Fizz Buzz", func(t *testing.T) {
		verificarSaidaTeste(t, FizzBuzz(30),
			[]string{"1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14",
				"FizzBuzz", "16", "17", "Fizz", "19", "Buzz", "Fizz", "22", "23",
				"Fizz", "Buzz", "26", "Fizz", "28", "29", "FizzBuzz"})
	})
}
