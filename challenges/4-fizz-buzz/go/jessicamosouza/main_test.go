package main

import (
	"reflect"
	"testing"
)

func TestGetPrint(t *testing.T) {
	table := []struct {
		input  int
		output []string
	}{
		{
			30,
			[]string{"1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz", "16", "17", "Fizz", "19", "Buzz", "Fizz", "22", "23", "Fizz", "Buzz", "26", "Fizz", "28", "29", "FizzBuzz"},
		},
		{
			16,
			[]string{"1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz", "16"},
		},
		{
			22,
			[]string{"1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz", "16", "17", "Fizz", "19", "Buzz", "Fizz", "22"},
		},
	}

	for _, test := range table {
		got := getOutput(test.input)
		if !reflect.DeepEqual(got, test.output) {

			t.Errorf("Função retornou %v, porém era para retornar %v, dado os valores de %v", got, test.output, test.input)
		}
	}

}


