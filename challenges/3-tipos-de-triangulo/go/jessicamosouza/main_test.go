package main

import (
	"reflect"
	"sort"
	"testing"
)

func TestDetectaTiposDeTriangulos(t *testing.T) {

	tabela := []struct {
		lados []float64
		quero []string
	}{
		{
			[]float64{7.0, 5.0, 7.0},
			[]string{"TRIANGULO ACUTANGULO", "TRIANGULO ISOSCELES"},
		},
		{
			[]float64{6.0, 6.0, 10.0},
			[]string{"TRIANGULO OBTUSANGULO", "TRIANGULO ISOSCELES"},
		},
		{
			[]float64{6.0, 6.0, 6.0},
			[]string{"TRIANGULO ACUTANGULO", "TRIANGULO EQUILATERO"},
		},
		{
			[]float64{5.0, 7.0, 2.0},
			[]string{"NAO FORMA TRIANGULO"},
		},
	}

	for _, teste := range tabela {
		tive := detectaTiposDeTriangulos(teste.lados)

		sort.Strings(teste.quero)
		sort.Strings(tive)

		if !reflect.DeepEqual(teste.quero, tive) {

			t.Errorf("Função retornou %s, porém era para retornar %s, dado os valores de %v", tive, teste.quero, teste.lados)
		}
	}
}

func TestParseLadosToFloat(t *testing.T) {
	tabela := []struct {
		input  string
		output []float64
		err    error
	}{
		{
			"7,5,7",
			[]float64{7, 5, 7},
			nil,
		},
		{
			"6",
			[]float64{},
			errInvalidUserInput,
		},
		{
			"6,5",
			[]float64{},
			errInvalidUserInput,
		},
		{
			"6,5,7,8",
			[]float64{},
			errInvalidUserInput,
		},
		{
			"6,e,8",
			[]float64{},
			errInvalidUserInput,
		},
		{
			"",
			[]float64{},
			errInvalidUserInput,
		},
		{
			"a",
			[]float64{},
			errInvalidUserInput,
		},
	}

	for _, teste := range tabela {
		tive, err := parseLadosToFloat(teste.input)
		if err != teste.err {
			t.Errorf("Função retornou %v, porém era para retornar %v, dado os valores de %v", err, teste.err, teste.input)
		}

		if err == nil && !reflect.DeepEqual(tive, teste.output) {

			t.Errorf("Função retornou %v, porém era para retornar %v, dado os valores de %v", tive, teste.output, teste.input)
		}
	}
}
