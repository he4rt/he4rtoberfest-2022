<?php

$valores[] = (int) $argv[1];
$valores[] = (int) $argv[2];
$valores[] = (int) $argv[3];

rsort($valores);

if ($valores[0] >= $valores[1] + $valores[2]){
    echo 'Não forma triângulo!' . PHP_EOL;
}elseif (pow($valores[0], $valores[0]) == pow($valores[1], $valores[1]) + pow($valores[2], $valores[2])){
    echo 'Triângulo retângulo!' . PHP_EOL;
}elseif (pow($valores[0], $valores[0]) > pow($valores[1], $valores[1]) + pow($valores[2], $valores[2])){
    echo 'Triângulo obtusângulo!' . PHP_EOL;
}elseif(pow($valores[0], $valores[0]) < pow($valores[1], $valores[1]) + pow($valores[2], $valores[2])){
    echo 'Triângulo acutângulo!' . PHP_EOL;
}

if (($valores[0] == $valores[1]) && ($valores[1] == $valores[2])){
    echo 'Triângulo equilátero!';
}elseif (($valores[0] == $valores[1]) || ($valores[1] == $valores[2])){
    echo 'Triângulo isósceles!';
}