package main

import "testing"

func ProdutoSimplesTest(t *testing.T) {
	t.Run("Desafio 1 - Produto simples: Teste 01", func(t *testing.T) {
		resultado := ProdutoSimples(10, 3)
		esperado := 30
		if resultado != esperado {
			t.Errorf("Resultado: %d\n Esperado: %d", resultado, esperado)
		}
	})
	t.Run("Desafio 1 - Produto simples: Teste 02", func(t *testing.T) {
		resultado := ProdutoSimples(5, 5)
		esperado := 25
		t.Errorf("Resultado: %d\n Esperado: %d", resultado, esperado)

	})

}
