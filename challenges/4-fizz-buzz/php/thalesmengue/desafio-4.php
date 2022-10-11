<?php

echo "Insira um valor: ";
$valor = fgets(STDIN);

if (!is_numeric($valor) || $valor == 0) {
    echo "Por favor, insira um número válido";
    exit;
}

for ($i = 1; $i <= $valor; $i++) {
    if (($i % 5 == 0) && ($i % 3 == 0)) {
        echo "FizzBuzz \n";
    } else if ($i % 3 == 0) {
        echo "Fizz \n";
    } else if ($i % 5 == 0) {
        echo "Buzz \n";
    } else {
        echo "$i \n";
    }
}
