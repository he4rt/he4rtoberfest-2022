<?php

$testes = (int) readline("Quantos testes foram realizados?");

if($testes <= 0){
    echo "Você precisa informar uma valor maior que 0";
}

$sapos = 0;
$coelhos = 0;
$ratos = 0;
$total = 0;


for($i = 1; $i <= $testes; $i++){
    $dados = explode(' ',readline("Caso Número $i: " . PHP_EOL));
    $quantidade = $dados[0];
    $tipo = strtoupper($dados[1]);

    if($tipo == "C" ){
          $coelhos+= $quantidade;
    } elseif ($tipo == "R"){
        $ratos+= $quantidade;
    } elseif ($tipo == "S"){
         $sapos+= $quantidade;
    }
     $total+= $quantidade;


}

$porcentagemCoelhos = ($coelhos*100) / $total;
$porcentagemSapos = ($sapos*100) / $total;
$porcentagemRatos = ($ratos*100) / $total;

$porcentagemCoelhos = number_format($porcentagemCoelhos, 2, '.', '');
$porcentagemSapos = number_format($porcentagemSapos, 2, '.', '');
$porcentagemRatos= number_format($porcentagemRatos,2,'.','');

echo "Total: $total \n" . PHP_EOL;
echo "Total de Coelhos: $coelhos \n". PHP_EOL;
echo "Total de Ratos: $ratos \n". PHP_EOL;
echo "Total de Sapos: $sapos\n". PHP_EOL;
echo "Percentual de Coelhos: $porcentagemCoelhos% \n" .PHP_EOL;
echo "Percentual de Ratos: $porcentagemRatos% \n" .PHP_EOL;
echo "Percentual de Sapos: $porcentagemSapos% \n" .PHP_EOL;





