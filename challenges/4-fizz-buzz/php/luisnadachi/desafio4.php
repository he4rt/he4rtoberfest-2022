<?php

$limite = (int) $argv[1];

for ($i = 1; $i <= $limite; $i++){
    if (($i % 5 == 0) && ($i % 3 == 0)){
        echo 'FizzBuzz' . PHP_EOL;
    }elseif ($i % 3 == 0){
        echo 'Fizz' . PHP_EOL;
    }elseif ($i % 5 == 0){
        echo 'Buzz' . PHP_EOL;
    }else{
        echo $i . PHP_EOL;
    }
}