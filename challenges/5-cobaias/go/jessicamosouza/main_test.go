package main

import (
	"reflect"
	"testing"
)

func TestCalcResultado(t *testing.T) {
	table := []struct {
		input  []string
		output resultado
	}{
		{
			[]string{"10 C", "6 R"},
			resultado{cobaias: 16, sapos: 0, coelhos: 10, ratos: 6},
		},
		{
			[]string{"10", "10 C", "6 R"},
			resultado{cobaias: 16, sapos: 0, coelhos: 10, ratos: 6},
		},
		{
			[]string{"10", "10 C", "6 R", "15 S"},
			resultado{cobaias: 31, sapos: 15, coelhos: 10, ratos: 6},
		},
		{
			[]string{"10", "10 C", "6 R", "15 S", "5 C"},
			resultado{cobaias: 36, sapos: 15, coelhos: 15, ratos: 6},
		},
		{
			[]string{"10", "10 C", "6 R", "15 S", "5 C", "14 R"},
			resultado{cobaias: 50, sapos: 15, coelhos: 15, ratos: 20},
		},
		{
			[]string{"10", "10 C", "6 R", "15 S", "5 C", "14 R", "9 C"},
			resultado{cobaias: 59, sapos: 15, coelhos: 24, ratos: 20},
		},
		{
			[]string{"10", "10 C", "6 R", "15 S", "5 C", "14 R", "9 C", "6 R", "8 S", "5 C", "14 R"},
			resultado{cobaias: 92, sapos: 23, coelhos: 29, ratos: 40},
		},
	}

	for _, test := range table {
		got := calcResultado(test.input)
		if !reflect.DeepEqual(got, test.output) {
			t.Errorf("Função retornou %#v, porém era para retornar %#v, dado os valores de %#v", got, test.output, test.input)
		}
	}
}
