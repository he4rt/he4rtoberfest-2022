<?php
if($argc < 3){
    echo "Valores para argumento 1 e 2 não informados, tente novamente \n";
    exit;
}
$argumento1 = (int) $argv[1];
$argumento2 = (int) $argv[2];
$prod = $argumento1 * $argumento2;
echo "produto: $prod \n";