package main

import (
	"math/rand"
	"testing"
)

func TestIdadeEmDias(t *testing.T) {
	verificarSaidaTeste := func(t *testing.T, resultadoAno, resultadoMes, resultadoDia, esperadoAno, esperadoMes, esperadoDia int) {
		t.Helper()
		if resultadoAno != esperadoAno ||
			resultadoMes != esperadoMes || resultadoDia != esperadoDia {
			t.Errorf("O resultado esperado era %d ano(s)\n%d mes(es)\n%d dia(s)\n "+
				"O resultado obtido foi %d ano(s)\n%d mes(es)\n%d dia(s)",
				esperadoAno, esperadoMes, esperadoDia,
				resultadoAno, resultadoMes, resultadoDia)
		}
	}

	t.Run("Teste 01: 400 dias", func(t *testing.T) {
		resultadoAno, resultadoMes, resultadoDia := IdadeEmDias(400)
		esperadoAno, esperadoMes, esperadoDia := 1, 1, 5

		verificarSaidaTeste(t, resultadoAno, resultadoMes, resultadoDia, esperadoAno, esperadoMes, esperadoDia)
	})

	t.Run("Teste 02: 800 dias", func(t *testing.T) {
		resultadoAno, resultadoMes, resultadoDia := IdadeEmDias(800)
		esperadoAno, esperadoMes, esperadoDia := 2, 2, 10

		verificarSaidaTeste(t, resultadoAno, resultadoMes, resultadoDia, esperadoAno, esperadoMes, esperadoDia)
	})

	t.Run("Teste 03: 30 dias", func(t *testing.T) {
		resultadoAno, resultadoMes, resultadoDia := IdadeEmDias(30)
		esperadoAno, esperadoMes, esperadoDia := 0, 1, 0

		verificarSaidaTeste(t, resultadoAno, resultadoMes, resultadoDia, esperadoAno, esperadoMes, esperadoDia)
	})
}

// go test -bench=.
func BenchmarkIdadeEmDias(b *testing.B) {
	for i := 0; i < b.N; i++ {
		IdadeEmDias(rand.Intn(999))
	}
}
