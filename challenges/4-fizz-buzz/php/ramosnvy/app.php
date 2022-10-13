<?php

$valor = readline('Digite um valor: ');

$i= 1;

for ($i = 1; $i <= $valor; $i++){
    if ($i % 3 == 0){
        echo "Fizz" . PHP_EOL ;
    }elseif ($i % 5 == 0){
        echo "Buzz" . PHP_EOL ;
}elseif ($i % 3 == 0 && $i % 5 == 0){
        echo "FizzBuzz" . PHP_EOL;
    }else{
        echo "$i" . PHP_EOL;
    }
}