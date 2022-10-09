<?php

$jogos = [];

$tesoura = ['papel', 'lagarto'];
$papel = ['pedra', 'spock'];
$pedra = ['lagarto', 'tesoura'];
$lagarto = ['spock', 'papel'];
$spock = ['tesoura', 'pedra'];

$casos = (int)readline("Digite o número de testes de caso: ");

for ($i = 0; $i < $casos; $i++) {
    $escolhas = explode(" " , readline("Jogo número" . $i+1 . ": "));
    $rajesh = $escolhas[0];
    $sheldon = $escolhas[1];

    if ($rajesh == $sheldon) {
        $result = "empate";
    } else if ($rajesh == "tesoura") {
        in_array($sheldon, $tesoura) ? $result = "rajesh" : $result = "sheldon";
    } else if ($rajesh == "papel") {
        in_array($sheldon, $papel) ? $result = "rajesh" : $result = "sheldon";
    } else if ($rajesh == "pedra") {
        in_array($sheldon, $pedra) ? $result = "rajesh" : $result = "sheldon";
    } else if ($rajesh == "lagarto") {
        in_array($sheldon, $lagarto) ? $result = "rajesh" : $result = "sheldon";
    } else if ($rajesh == "spock") {
        in_array($sheldon, $spock) ? $result = "rajesh" : $result = "sheldon";
    }

    array_push($jogos, $result);
}

echo PHP_EOL;
foreach ($jogos as $jogo) {
    echo $jogo . PHP_EOL;
}