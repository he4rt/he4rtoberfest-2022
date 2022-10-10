<?php

$ano = 0;
$mes = 0;
$dia = 0;

$age = (int)readline("Digite a sua idade em dias: ");

while ($age >= 365) {
    $ano++;
    $age -= 365;   
}

while ($age >= 30) {
    $mes++;
    $age -= 30;
}

while ($age >= 1){
    $dia++;
    $age--;
}

echo "$ano ano(s)\n$mes mes(es)\n$dia dia(s)" . PHP_EOL;
