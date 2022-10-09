<?php
$valor1 = is_numeric($argv[1]) ? $argv[1] : null;
$valor2 = is_numeric($argv[2]) ? $argv[2] : null;
if (!is_null($valor1) && !is_null($valor2)) {
   $prod = $valor1 * $valor2;
   $prodFormat = number_format($prod, 0, ',', '.');
   if (is_float($prod)) 
        $prodFormat = number_format($prod, 2, ',', '.');
    echo "produto: ${prodFormat}".PHP_EOL;
} else {
    echo "Argumentos inválidos";
}
