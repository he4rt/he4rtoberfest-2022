<?php

if (!isset($argv[1])) {
    echo 'Informe um valor.' . PHP_EOL;
    return;
}

if (!is_int($argv[1]) && $argv[1] <= 0) {
    echo 'Informe um valor numérico maior que zero.' . PHP_EOL;
    return;
}

$idade = (int) $argv[1];

$anos = $idade / 365;
$meses = ($idade % 365) / 30;
$dias = (($idade % 365) % 30);


print_r(PHP_EOL);
print_r("{$anos} ano(s)" . PHP_EOL);
print_r("{$meses} mes(es)" . PHP_EOL);
print_r("{$dias} dia(s)" . PHP_EOL);
