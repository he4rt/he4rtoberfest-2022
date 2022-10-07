<?php

if (count($argv) < 3) {
    throw new \Exception('Informe dois números.' . PHP_EOL);
}


if (count($argv) > 3) {
    throw new \Exception('Informe apenas dois números.' . PHP_EOL);
}

$primeiroNumero = $argv[1];
$segundoNumero = $argv[2];

if (!is_numeric($primeiroNumero) || !is_numeric($segundoNumero)) {
    throw new \Exception('Os valores informados devem ser números.' . PHP_EOL);
}

$produto = $primeiroNumero * $segundoNumero;

print_r("Produto de {$primeiroNumero} e {$segundoNumero}: {$produto} " . PHP_EOL);
