<?php
$totalTestes = intval(rtrim(fgets(STDIN)));
$totalCobaias = 0;
$totalCoelhos = 0;
$totalRatos = 0;
$totalSapos = 0;

$contador = 1;

while ($contador <= $totalTestes) {
    $input = rtrim(fgets(STDIN));
    $teste = explode(' ', $input);
    $qtd = $teste[0];
    $tipo = $teste[1];
    $totalCobaias += $qtd;

    if ($tipo == 'C') {
        $totalCoelhos += $qtd;
    } else if ($tipo == 'R') {
        $totalRatos += $qtd;
    } else if ($tipo == 'S') {
        $totalSapos += $qtd;
    }
    $contador++;
}

$getPct = fn ($parte) => number_format(($parte/$totalCobaias)*100, 2);
$pctCoelhos = $getPct($totalCoelhos);
$pctRatos = $getPct($totalRatos);
$pctSapos = $getPct($totalSapos);

echo "Total: $totalCobaias cobaias".PHP_EOL;
echo "Total de coelhos: $totalCoelhos".PHP_EOL;
echo "Total de ratos: $totalRatos".PHP_EOL;
echo "Total de sapos: $totalSapos".PHP_EOL;
echo "Percentual de coelhos: $pctCoelhos"." %".PHP_EOL;
echo "Percentual de ratos: $pctRatos"." %".PHP_EOL;
echo "Percentual de sapos: $pctSapos"." %".PHP_EOL;
