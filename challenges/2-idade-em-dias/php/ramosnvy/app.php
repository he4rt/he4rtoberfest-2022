<?php

$totalDias = readline('Qual o total de dias?');

$anos = ($totalDias / 365); // Total de anos
$anosSobra = ($totalDias % 365); //Pegando o resto e descobrindo o total de dias restantes.
$dias = ($anosSobra  % 30); //Descobrindo os dias, utilizando o resto dos meses.
$meses = ($anosSobra / 30); //Descobrindo os meses.

echo "\n Ano(s): " . floor($anos) . " \n Mes(es): " . floor($meses) . " \n Dia(s): " .  floor($dias) . " \n";

?>