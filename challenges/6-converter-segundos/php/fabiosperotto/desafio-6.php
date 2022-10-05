<?php
if($argc < 2){
    echo "parâmetro de entrada não informado\n";
    exit;
}
$segundos = (int) $argv[1];
//gmdate possui certas limitacoes de calculo se passar de 86400 segundos (ou 24h)
if($segundos < 86400){
    echo gmdate("H:i:s", $segundos) . "\n";
    exit;
}

//o calculo abaixo lida com a limitacao do gmdate, deve ser a melhor solucao,
//pois nao ha limitacao de entrada em segundos
if($segundos >= 86400){
    $horas = floor($segundos / 3600);
    $minutos = ($segundos / 60) % 60;
    $segundos = $segundos % 60;
    //usando sprintf para formatar em 2 casas cada valor, 
    //ao inves de mostrar o formato em 1:0:0 mostra em 01:00:00, por exemplo
    echo sprintf("%02d:%02d:%02d", $horas, $minutos, $segundos) . "\n";
    exit;
}