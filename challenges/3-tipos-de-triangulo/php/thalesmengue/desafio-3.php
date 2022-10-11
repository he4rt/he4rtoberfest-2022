<?php

echo "Primeiro valor: ";
$valores[] = fgets(STDIN);
echo "Segundo valor: ";
$valores[] = fgets(STDIN);
echo "Terceiro valor: ";
$valores[] = fgets(STDIN);

rsort($valores);

if ($valores[0] >= ($valores[1] + $valores[2])) {
    echo "Não forma triângulo";
} else {
    if (pow($valores[0], 2) == (pow($valores[1], 2) + pow($valores[2], 2))) {
        echo "Triângulo Retângulo \n";
    }
    if (pow($valores[0], 2) > (pow($valores[1], 2) + pow($valores[2], 2))) {
        echo "Triângulo Obtusângulo \n";
    }
    if (pow($valores[0], 2) < (pow($valores[1], 2) + pow($valores[2], 2))) {
        echo "Triângulo Acutângulo \n";
    }
    if (($valores[0] == $valores[1]) && ($valores[1] == $valores[2])) {
        echo "Triângulo Equilátero \n";
    } else if (($valores[0] == $valores[1]) || ($valores[1] == $valores[2]) || ($valores[1] == $valores[2])) {
        echo "Triângulo Isósceles \n";
    }
}