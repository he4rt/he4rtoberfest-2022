<?php

function multiplicar($numero1, $numero2) {
    $PROD = $numero1 * $numero2;
    return $PROD;
}

echo ('Ola, escreva um numero!!') .PHP_EOL;
$numero1 = trim(fgets(STDIN)) .PHP_EOL;

echo ('escreva um segundo numero!!') .PHP_EOL;
$numero2 = trim(fgets(STDIN)) .PHP_EOL;

$PROD = multiplicar($numero1, $numero2);
echo ('produto: ' . $PROD);
