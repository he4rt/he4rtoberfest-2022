<?php

echo ('Ola, escreva um numero inteiro aleatorio!') .PHP_EOL;
$numero = trim(fgets(STDIN)) . PHP_EOL;

for ($i = 1; $i <= $numero; $i++){
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
