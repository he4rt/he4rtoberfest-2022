<?php

$valor1 = is_numeric($argv[1]) ? $argv[1] : null;
$valor2 = is_numeric($argv[2]) ? $argv[2] : null;
if (!is_null($valor1) && !is_null($valor2)) {
    $prod = number_format($valor1 * $valor2, 2);
    echo "produto: ${prod}".PHP_EOL;
} else {
    echo "Argumentos inválidos";
}
