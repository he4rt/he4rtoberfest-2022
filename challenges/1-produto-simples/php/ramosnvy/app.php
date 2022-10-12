<?php



$num1 =  readline('Digite o primeiro valor: '); // Input do primeiro valor
$num2 =  readline('Digite o segundo valor: '); // Input do segundo valor

if (empty($num1) or empty($num2)){
    echo "Digite os valores pedidos!";
} else{
    $prod = ($num1 * $num2); //Produto dos valores
    echo "Produto total: $prod \n"; //Output
}








