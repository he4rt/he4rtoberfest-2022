<?php

if (count($argv) < 2) {
    throw new \Exception('Informe um valor correspondente a segundos.');
}

$inputSegundos = (int)$argv[1];

$horas = floor($inputSegundos / (60 * 60));

$segundosRestantes = $inputSegundos - ($horas * (60 * 60));

$minutos = floor($segundosRestantes / 60);

$segundos = floor($segundosRestantes - ($minutos * 60));

echo 'Hora formatada: ' .  sprintf("%02d:%02d:%02d", $horas, $minutos, $segundos);
echo PHP_EOL;
