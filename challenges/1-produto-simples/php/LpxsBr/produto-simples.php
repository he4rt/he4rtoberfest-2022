<?php

function produto(int $num1, int $num2){
    
    $PROD = ($num1 * $num2);
    return 'produto: '.($PROD);
}

echo $resp = (isset($argv[1]) and isset($argv[2])) ? produto($argv[1], $argv[2]) : "valores não informados, tente novamente";
