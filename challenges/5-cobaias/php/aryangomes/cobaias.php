<?php

if (count($argv) < 2) {
    throw new \Exception('Informe a quantidade total de testes.');
}

$quantidadeDeCasosDeTestes = $argv[1];

echo 'Digite os casos: ' . PHP_EOL;
echo PHP_EOL;

$casosDeTeste = [];

for ($i = 1; $i <= $quantidadeDeCasosDeTestes; $i++) {

    do {
        $tipoDeCobaia = null;

        $inputCasoDeTeste = readline("Teste $i: ");

        if (!($inputCasoDeTeste)) {
            echo 'Nenhum valor informado! Digite novamente.' . PHP_EOL;
            continue;
        }
        $casoDeTeste = explode(' ', $inputCasoDeTeste);

        $tipoDeCobaia = strtoupper($casoDeTeste[1]);

        $quantidadeDeCobaias = $casoDeTeste[0];
        if (verificaTipoDeCobaia($tipoDeCobaia)) {
            echo 'Tipo de cobaia incorreta! Digite novamente.' . PHP_EOL;
        }
    } while (verificaTipoDeCobaia($tipoDeCobaia));

    if (key_exists($tipoDeCobaia, $casosDeTeste)) {

        $casosDeTeste[$tipoDeCobaia] += (int) $quantidadeDeCobaias;
    } else {
        $casosDeTeste[$tipoDeCobaia] = (int) $quantidadeDeCobaias;
    }
}

$totalDeCasosDeTestesDeCoelhos =  0;

if (key_exists('C', $casosDeTeste)) {
    $totalDeCasosDeTestesDeCoelhos =  $casosDeTeste['C'];
}


$totalDeCasosDeTestesDeRatos = 0;

if (key_exists('R', $casosDeTeste)) {
    $totalDeCasosDeTestesDeRatos =  $casosDeTeste['R'];
}

$totalDeCasosDeTestesDeSapos =   0;

if (key_exists('S', $casosDeTeste)) {
    $totalDeCasosDeTestesDeSapos =  $casosDeTeste['S'];
}

$totalDeCasosDeTestes = $totalDeCasosDeTestesDeCoelhos + $totalDeCasosDeTestesDeRatos +
    $totalDeCasosDeTestesDeSapos;

$percentualTotalDeCasosDeTestesDeCoelhos = number_format((($totalDeCasosDeTestesDeCoelhos / ($totalDeCasosDeTestes / 100))), 2);

$percentualTotalDeCasosDeTestesDeRatos = number_format((($totalDeCasosDeTestesDeRatos / ($totalDeCasosDeTestes / 100))), 2);

$percentualTotalDeCasosDeTestesDeSapos = number_format((($totalDeCasosDeTestesDeSapos / ($totalDeCasosDeTestes / 100))), 2);

echo PHP_EOL;

print_r("Total: $totalDeCasosDeTestes cobaias" . PHP_EOL);

print_r("Total de coelhos: $totalDeCasosDeTestesDeCoelhos" . PHP_EOL);

print_r("Total de ratos: $totalDeCasosDeTestesDeRatos" . PHP_EOL);

print_r("Total de sapos: $totalDeCasosDeTestesDeSapos" . PHP_EOL);

print_r("Percentual de coelhos: $percentualTotalDeCasosDeTestesDeCoelhos %" . PHP_EOL);

print_r("Percentual de ratos: $percentualTotalDeCasosDeTestesDeRatos %" . PHP_EOL);

print_r("Percentual de sapos: $percentualTotalDeCasosDeTestesDeSapos %" . PHP_EOL);

function verificaTipoDeCobaia(?string $tipoDeCobaia): bool
{
    return ($tipoDeCobaia != 'C' &&
        $tipoDeCobaia != 'R' &&
        $tipoDeCobaia != 'S');
}
