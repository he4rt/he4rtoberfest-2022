<?php

$messages = [];

if (count($argv) < 3) {
    echo "fodase" . PHP_EOL;
    return;
}

[$cmd, $a, $b, $c] = $argv;
$values = [$a, $b, $c];
rsort($values);

$values = array_map(fn ($i) => (float) $i, $values);

[$a, $b, $c] = $values;



if ($a >= ($b + $c) ) {
    echo "NÃO FORMA TRIÂNGULO" . PHP_EOL;
    return;
}

if(pow($a, 2) == (pow($b, 2) + pow($c, 2))) {
    $messages[] = "TRIANGULO RETANGULO";
}

if(pow($a, 2) > (pow($b, 2) + pow($c, 2))) {
    $messages[] = "TRIANGULO OBTUSANGULO";
}

if(pow($a, 2) < (pow($b, 2) + pow($c, 2))) {
    $messages[] = "TRIANGULO ACUTANGULO";
}

if($a == $b && $b == $c) {
    $messages[] = "TRIANGULO EQUILATERO";
}


if(($a == $b || $b == $c) && (($a == $b && $b == $c && $c == $a) == false)) {
    $messages[] = "TRIANGULO ISOSCELES";
}

foreach($messages as $message) {
    echo sprintf('%s', $message) . PHP_EOL;
}



