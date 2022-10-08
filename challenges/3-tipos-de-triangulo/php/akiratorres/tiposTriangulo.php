<?php

echo "Entrada: ";
$values = fscanf(STDIN, "%f %f %f\n");
rsort($values);

echo PHP_EOL;

if ($values[0] >= $values[1] + $values[2]) {
    echo "NAO FORMA TRIANGULO" . PHP_EOL;
} else {
    if (pow($values[0], 2) == pow($values[1], 2) + pow($values[2], 2)) {
        echo "TRIANGULO RETANGULO" . PHP_EOL;
    }
    if (pow($values[0], 2) > pow($values[1], 2) + pow($values[2], 2)) {
        echo "TRIANGULO OBTUSANGULO" . PHP_EOL;
    }
    if (pow($values[0], 2) < pow($values[1], 2) + pow($values[2], 2)) {
        echo "TRIANGULO ACUTANGULO" . PHP_EOL;
    }
    if (($values[0] == $values[1]) && ($values[1] == $values[2])) {
        echo "TRIANGULO EQUILATERO" . PHP_EOL;
    } else if (($values[0] == $values[1]) || ($values[0] == $values[2]) || ($values[1] == $values[2])) {
        echo "TRIANGULO ISOSCELES" . PHP_EOL;
    }
}
