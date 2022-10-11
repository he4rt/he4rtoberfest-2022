<?php

function calcularAnos(int $idadeEmDias) {
    $anos = ($idadeEmDias / 365);
    return $anos;
}

function calcularMeses(int $idadeEmDias): int
{
    $meses = ($idadeEmDias % 365) / 30;
    return $meses;
}

function getDias(int $idadeEmDias): int
{
    $dias = ($idadeEmDias % 365) % 30;
    return $dias;
}

function printarResultados(int $anos, int $meses, int $dias): void
{
    echo floor($anos) . " ano(s)" . PHP_EOL;
    echo floor($meses) . " mes(es)" . PHP_EOL;
    echo floor($dias) . " dia(s)" . PHP_EOL;
}

function calcularResultados(int $idadeEmDias): void
{
   $anos = calcularAnos($idadeEmDias);
   $meses = CalcularMeses($idadeEmDias);
   $dias = getDias($idadeEmDias);
   
   printarResultados($anos, $meses, $dias);
}

echo ('Ola, escreva quantos anos você tem em dia!!') .PHP_EOL;
$idadeEmDias = trim(fgets(STDIN)) .PHP_EOL;

calcularResultados($idadeEmDias);
