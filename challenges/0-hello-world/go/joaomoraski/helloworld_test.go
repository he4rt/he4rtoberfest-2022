package main

import "testing"

func TestHelloHeartoberfest(t *testing.T) {
	t.Run("Teste com hello dinamico", func(t *testing.T) {
		resultado := HelloHeartoberfest("He4rtoberfest")
		esperado := "Hello He4rtoberfest!"
		if resultado != esperado {
			t.Errorf("Resultado: %s\n Esperado: %s", resultado, esperado)
		}
	})

	t.Run("Teste com string vazia", func(t *testing.T) {
		resultado := HelloHeartoberfest("")
		esperado := "Hello World!"
		if resultado != esperado {
			t.Errorf("Resultado: %s\n Esperado: %s", resultado, esperado)
		}
	})
}
