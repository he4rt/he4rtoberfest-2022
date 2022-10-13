<?php

echo "Número de dias: ";
$ageInDays = fgets(STDIN);

if (!is_numeric($ageInDays)) {
    echo "Por favor, insira um valor númérico válido!";
    exit;
}

if ($ageInDays == null) {
    echo "Por favor, insira um valor numérico!";
    exit;
}

$yearRest = $ageInDays % 365;
$year = $ageInDays / 365;
$monthRest = $yearRest % 30;
$month = $yearRest / 30;

echo floor($year) . " ano(s)" . PHP_EOL;
echo floor($month) . " mes(es)" . PHP_EOL;
echo floor($monthRest) . " dia(s)" . PHP_EOL;
