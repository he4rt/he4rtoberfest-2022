<?php
// gerencia input
$values = [];
forEach($argv as $key => $arg) {
    if ($key !== 0 && is_numeric($arg)) 
        array_push($values, number_format(floatval($arg), 1));
}
if (count($values) != 3) {
    echo "[Argumentos inválidos]: Insira 3 números".PHP_EOL;
    die();
}
echo "Entrada: ".implode(" ",$values).PHP_EOL;

// processa
rsort($values, SORT_NUMERIC);
$numsUnicos = array_unique($values, SORT_NUMERIC);
$a = $values[0];
$b = $values[1];
$c = $values[2];

if ($a >= ($b + $c)) { 
    echo "NAO FORMA TRIANGULO".PHP_EOL;
    die();
}

$sqA = $a * $a;
$sqB = $b * $b;
$sqC = $c * $c;
$sqMidLow = $sqB + $sqC;

if (count($numsUnicos) == 1) {
    $ladoTriangulo = 'TRIANGULO EQUILATERO';
} else if (count($numsUnicos) == 2) {
    $ladoTriangulo = 'TRIANGULO ISOSCELES';
}

if ($sqA == $sqMidLow) {
    $tipoTriangulo = "TRIANGULO RETANGULO";
} elseif ($sqA > $sqMidLow) {
    $tipoTriangulo = "TRIANGULO OBTUSANGULO";
} else {
    $tipoTriangulo = "TRIANGULO ACUTANGULO";
}

// exibe resultado
echo $tipoTriangulo.PHP_EOL;
echo $ladoTriangulo.PHP_EOL;