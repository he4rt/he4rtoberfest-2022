<?php

if (count($argv) != 4) {
    throw new \Exception('Informe três valores.' . PHP_EOL);
}
$args = array_slice($argv, 1);
rsort($args);
$ladoA = (float) $args[0];
$ladoB = (float) $args[1];
$ladoC = (float) $args[2];

print_r(PHP_EOL);

if ($ladoA >= ($ladoB + $ladoC)) {
    print_r('NAO FORMA TRIANGULO' . PHP_EOL);
    return;
}

$ladoAaoQuadrado = pow($ladoA, 2);

$ladoBaoQuadrado = pow($ladoB, 2);

$ladoCaoQuadrado = pow($ladoC, 2);

$todosOsLadosSaoIguais = (($ladoA == $ladoB) && ($ladoA == $ladoC) && ($ladoB == $ladoC));

if ($ladoAaoQuadrado == ($ladoBaoQuadrado + $ladoCaoQuadrado)) {
    print_r('TRIANGULO RETANGULO' . PHP_EOL);
}

if ($ladoAaoQuadrado > ($ladoBaoQuadrado + $ladoCaoQuadrado)) {
    print_r('TRIANGULO OBTUSANGULO' . PHP_EOL);
}

if ($ladoAaoQuadrado < ($ladoBaoQuadrado + $ladoCaoQuadrado)) {
    print_r('TRIANGULO ACUTANGULO' . PHP_EOL);
}

if ($todosOsLadosSaoIguais) {
    print_r('TRIANGULO EQUILATERO' . PHP_EOL);
}

if (!$todosOsLadosSaoIguais) {
    print_r('TRIANGULO ISOSCELES' . PHP_EOL);
}

print_r(PHP_EOL);
