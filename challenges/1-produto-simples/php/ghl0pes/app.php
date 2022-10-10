<?php 

function simpleProduct (int $firstNumber, int $secondNumber): int {
  return $firstNumber * $secondNumber;
}

$numberOne = (int)readline("Primeiro número: ");
$numberTwo = (int)readline("Segundo número: ");

echo "O produto simples entre $numberOne e $numberTwo é " . simpleProduct($numberOne, $numberTwo);
