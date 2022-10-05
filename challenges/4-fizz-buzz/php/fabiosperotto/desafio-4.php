<?php
//checagem de input
if($argc < 2){
    echo "informe valor inteiro de entrada para o script\n";
    exit;
}
$limite = (int) $argv[1];
if($limite == 0){
    echo "informe um número válido\n";
    exit;
}

//algoritmo
for($i = 0; $i < $limite; $i++){
    $numero = $i + 1;
    if( ($numero % 3 == 0) && ($numero % 5 == 0) ){
        echo 'FizzBuzz';
    }else if($numero % 3 == 0){
        echo 'Fizz';
    }else if($numero % 5 == 0){
        echo 'Buzz';
    }else{
        echo $numero;
    }
    echo "\n";
}