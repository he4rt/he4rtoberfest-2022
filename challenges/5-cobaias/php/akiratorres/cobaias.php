<?php

$coelhos = 0;
$ratos = 0;
$sapos = 0;
$total = 0;

$casos = (int)readline("Digite o número de casos de teste: ");
echo "Digite a quantidade de animais e o tipo conforme o exemplo: 10 C\n\n";

for ($i = 0; $i < $casos; $i++) {
    $caso = explode(' ', readline($i + 1 . "- "));
    $quantia = (int)$caso[0];
    $tipo = $caso[1];

    if (($tipo == 'C') || ($tipo == 'c')) {
        $coelhos += $quantia;
    } else if (($tipo == 'R') || ($tipo == 'r')) {
        $ratos += $quantia;
    } else if (($tipo == 'S') || ($tipo == 's')) {
        $sapos += $quantia;
    }

    $total += $quantia;
}

$percentualCoelhos = ($coelhos * 100) / $total;
$percentualRatos = ($ratos * 100) / $total;
$percentualSapos = ($sapos * 100) / $total;

$percentualCoelhos = number_format($percentualCoelhos, 2, '.', '');
$percentualRatos = number_format($percentualRatos, 2, '.', '');
$percentualSapos = number_format($percentualSapos, 2, '.', '');

echo PHP_EOL . "Total: $total cobaias" . PHP_EOL;
echo "Total de coelhos: $coelhos\nTotal de ratos: $ratos\nTotal de sapos: $sapos" . PHP_EOL;
echo "Percentual de coelhos: $percentualCoelhos %" . PHP_EOL;
echo "Percentual de ratos: $percentualRatos %" . PHP_EOL;
echo "Percentual de sapos: $percentualSapos %" . PHP_EOL;
