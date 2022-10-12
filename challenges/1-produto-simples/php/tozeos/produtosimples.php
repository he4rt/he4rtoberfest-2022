<?php

echo "Digite dois numerais separados por um espaço para realizar a operação." . PHP_EOL;

$input = explode(" ", fgets(STDIN));
$num1 = (int) $input[0];
$num2 = (int) $input[1];
$prod = $num1 * $num2;

echo "Produto: " . $prod . PHP_EOL;