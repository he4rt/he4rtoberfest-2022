<?php

$input = (int) $argv[1];

function calcularIdadeEmDias(int $dias): array
{

    $anos = floor($dias / 365);
    $meses = floor(($dias / 30) / 12);
    $dias = $dias % 365 % 30;

    return [
        'ano(s)' => $anos,
        'mes(es)' => $meses,
        'dia(s)' => $dias,
    ];
}

foreach(calcularIdadeEmDias($input) as $key => $value) {
    echo sprintf("%s %s", $value, $key) . PHP_EOL;
}