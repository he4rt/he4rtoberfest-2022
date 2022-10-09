<?php

if (count($argv) <= 1) {
    throw new \Exception('Informe um valor.' . PHP_EOL);
}

$valorDeEntrada = $argv[1];

$anos = floor($valorDeEntrada / 365);

$diasRestantes = $valorDeEntrada % 365;

$meses = floor($diasRestantes / 30);

$dias = $diasRestantes % 30;


print_r(PHP_EOL);
print_r("{$anos} ano(s)" . PHP_EOL);
print_r("{$meses} mes(es)" . PHP_EOL);
print_r("{$dias} dia(s)" . PHP_EOL);
