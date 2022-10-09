<?php

$idade = (int) $argv[1];

if ($idade == null){
    echo 'Digite algum valor!';
}else{
    $ano = $idade / 365;
    $mes = ($idade % 365) / 30;
    $dia = (($idade % 365) % 30);

    echo "Ano:" . number_format($ano, 0) . PHP_EOL;
    echo "Mês:" . number_format($mes, 0) . PHP_EOL;
    echo "Dia:" . number_format($dia, 0) . PHP_EOL;
}

