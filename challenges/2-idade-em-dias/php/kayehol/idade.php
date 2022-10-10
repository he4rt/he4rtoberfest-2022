<?php
$diasPorAno = 365;
$diasPorMes = 30;
$mesesPorAno = 12;
$diasTotal = is_numeric($argv[1]) ? $argv[1] : null;

if (!is_null($diasTotal)) {
    $anos = floor($diasTotal / $diasPorAno);
    $anosEmDias = $anos * $diasPorAno;
    $meses = floor(
        ($diasTotal - $anosEmDias) / $diasPorMes
    );
    $mesesEmDias = $meses * $diasPorMes;
    $diasFinal = $diasTotal - $anosEmDias - $mesesEmDias;

    echo "{$anos} ano(s)".PHP_EOL;
    echo "{$meses} mes(es)".PHP_EOL;
    echo "${diasFinal} dia(s)".PHP_EOL; 
} else {
    echo "[ Argumento inválido ] : Insira um número inteiro".PHP_EOL;
}
