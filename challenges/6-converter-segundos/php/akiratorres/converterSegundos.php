<?php

$horas = 0;
$minutos = 0;
$segundos = (int)readline("Digite o tempo em segundos: ");

$horas = intdiv($segundos, 3600);
$segundos -= $horas * 3600;

$minutos = intdiv($segundos, 60);
$segundos -= $minutos * 60;

if ($horas < 10) {
    $horas = '0' . strval($horas);
}
if ($minutos < 10) {
    $minutos = '0' . strval($minutos);
}
if ($segundos < 10) {
    $segundos = '0' . strval($segundos);
}

echo "$horas:$minutos:$segundos" . PHP_EOL;
