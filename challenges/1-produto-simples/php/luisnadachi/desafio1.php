<?php
if($argc < 3){
    echo "Valores não informados! \n";
    exit;
}
$numero1 = (int) $argv[1];
$numero2 = (int) $argv[2];
$produto = $numero1 * $numero2;
echo "Total do produto: $produto \n";