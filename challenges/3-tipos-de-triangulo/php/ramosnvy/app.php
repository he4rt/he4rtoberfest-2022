<?php

$valores[] = readline('Informe o primeiro valor');
$valores[] = readline('Informe o segundo valor');
$valores[] = readline('Informe o terceiro valor');

rsort($valores);



if ( $valores[0] >= $valores[1] + $valores[2]){
    echo "NÃO FORMA TRIÂNGULO" . "\n";
} elseif (pow($valores[0], $valores[0]) == pow($valores[1], $valores[1]) + pow($valores[2],$valores[2])){
    echo "TRIÂNGULO RETÂNGULO" . "\n";
} elseif (pow($valores[0], $valores[0]) > pow($valores[1], $valores[1]) + pow($valores[2],$valores[2])){
    echo "TRIÂNGULO OBTUSÂNGULO" . "\n";
} elseif (pow($valores[0], $valores[0]) < pow($valores[1], $valores[1]) + pow($valores[2],$valores[2])) {
    echo "TRIÂNGULO ACUTÂNGULO" . "\n";
}

if (($valores[0] == $valores[1]) && ($valores[1] == $valores[2])){
    echo 'TRIANGULO EQUILATERO ' . "\n";
}elseif (($valores[0] == $valores[1]) || ($valores[1] == $valores[2])){
    echo 'TRIANGULO ISOSCELES!' . "\n";
}


?>