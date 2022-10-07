<?php

echo "Digite o primeiro número: ";
$produto1 = fgets(STDIN);
echo "Digite o segundo número: ";
$produto2 = fgets(STDIN);

if (!is_numeric($produto1) || !is_numeric($produto2)) {
    echo "Por favor, informe apenas números!";
    exit;
}

$PROD = $produto1 * $produto2;

echo "Valor do produto: $PROD \n";
