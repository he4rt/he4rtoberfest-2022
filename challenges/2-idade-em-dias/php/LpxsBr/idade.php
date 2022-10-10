<?php
if(isset($argv[1])){
    $idade = $argv[1];

    $anos = $idade/365;
    $meses = ($idade > (365)) ? (($anos)*$idade)/30 : $meses = $idade <= 365 ? 0 : $idade/30;
    $idade = ($idade > (365)) ? (((($anos)*$idade)/30)-((int) $meses))*30 : $idade = $idade <= 365 ? 0 : ((($idade)/30)-((int) $meses))*30;

    $frase1 = (int) $anos > 1 ? ' anos' : ' ano';
    $frase2 = (int) $meses > 1 ? ' meses' : ' mês';
    $frase3 = (int) $meses > 1 ? ' dias' : ' dias';

    echo number_format($anos, 0).$frase1.PHP_EOL;
    echo number_format($meses, 0).$frase2.PHP_EOL;
    echo number_format($idade, 0).$frase3.PHP_EOL;
}else{
    echo 'sem valores informados, tente novamente';
}


