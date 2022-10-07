<?php

echo "Número de dias: ";
$dias = fgets(STDIN);

if (!is_numeric($dias)) {
    echo "Por favor, insira apenas números!";
} else {
    $anoSobra = $dias % 365;
    $ano = $dias / 365;
    $mesSobra = $anoSobra % 30;
    $mes = $anoSobra / 30;

    echo floor($ano) . " ano(s)" . PHP_EOL;
    echo floor($mes) . " mes(es)" . PHP_EOL;
    echo floor($mesSobra) . " dia(s)" . PHP_EOL;
}