<?php

if (isset($argv[1]) and isset($argv[2])) {
    $num1 = $argv[1];
    $num2 = $argv[2];
    echo 'produto: '.$PROD = $num1 * $num2;
} else {
    echo 'sem valores informados, tente novamente';
}