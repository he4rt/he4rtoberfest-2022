<?php

echo "Digite o primeiro número: ";
$number1 = fgets(STDIN);
echo "Digite o segundo número: ";
$number2 = fgets(STDIN);

if (!is_numeric($number1)) {
    echo "O primeiro valor não é um número";
    exit;
}

if (!is_numeric($number2)) {
    echo "O segundo valor não é um número";
    exit;
}

$result = $number1 * $number2;

echo "Total do produto: $result \n";