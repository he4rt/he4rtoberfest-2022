<?php

if (count($argv) != 2) {
    throw new \Exception('Informe apenas um valor.' . PHP_EOL);
}

$numeros = range(1, $argv[1]);

$numerosFizzBuzz  = array_map(function ($numero) {
    if (!(($numero % 3 == 0) || ($numero % 5 == 0))) {
        return $numero;
    }
    $numeroFizzBuzz = '';
    if ($numero % 3 == 0) {
        $numeroFizzBuzz .= 'Fizz';
    }

    if ($numero % 5 == 0) {
        $numeroFizzBuzz .= 'Buzz';
    }

    return $numeroFizzBuzz;
}, $numeros);


print_r(PHP_EOL);

foreach ($numerosFizzBuzz as  $numero) {
    print_r($numero);
    print_r(PHP_EOL);
}
