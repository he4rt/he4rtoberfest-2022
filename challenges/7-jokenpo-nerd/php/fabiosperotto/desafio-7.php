<?php
$testes = trim(readline());
for($i=0; $i < $testes; $i++){
    //pegar as duas opcoes informadas no comando, remover espacos em branco no final e 
    //colocar as duas jogadas em caixa baixa para melhor comparacao na funcao de avaliacao da
    //jogada
    $jogadas = explode(" ", strtolower(trim(readline())));
    if(count($jogadas) < 2) echo "para o pleno funcionamento é necessário informar 2 jogadas\n";
    $player1 = $jogadas[0];
    $player2 = $jogadas[1];
    $resultado = verificaJogada($player1, $player2);

    if($resultado == 'empate') echo "empate\n";
    if($resultado == $player1) echo "rajesh\n";
    if($resultado == $player2) echo "sheldon\n";
}

/**
 * Avalia duas jogadas calculando qual deve ser a vitoriosa.
 *
 * @param string $jogada1 opcao 1 da jogada
 * @param string $jogada2 opcao 2 da jogada
 * @return string a opcao/jogada que deve ser considerada vitoriosa
 */
function verificaJogada($jogada1, $jogada2){
    if($jogada1 == 'tesoura' && $jogada2 == 'papel' || $jogada2 == 'tesoura' && $jogada1 == 'papel') return 'tesoura';
    if($jogada1 == 'papel' && $jogada2 == 'pedra' || $jogada2 == 'papel' && $jogada1 == 'pedra') return 'papel';
    if($jogada1 == 'pedra' && $jogada2 == 'lagarto' || $jogada2 == 'pedra' && $jogada1 == 'lagarto') return 'pedra';
    if($jogada1 == 'lagarto' && $jogada2 == 'spock' || $jogada2 == 'spock' && $jogada1 == 'lagarto') return 'lagarto';
    if($jogada1 == 'spock' && $jogada2 == 'tesoura' || $jogada2 == 'spock' && $jogada1 == 'tesoura') return 'spock';
    if($jogada1 == 'tesoura' && $jogada2 == 'lagarto' || $jogada2 == 'tesoura' && $jogada1 == 'lagarto') return 'tesoura';
    if($jogada1 == 'lagarto' && $jogada2 == 'papel' || $jogada2 == 'lagarto' && $jogada1 == 'papel') return 'lagarto';
    if($jogada1 == 'papel' && $jogada2 == 'spock' || $jogada2 == 'papel' && $jogada1 == 'spock') return 'papel';
    if($jogada1 == 'spock' && $jogada2 == 'pedra' || $jogada2 == 'spock' && $jogada1 == 'pedra') return 'spock';
    if($jogada1 == 'pedra' && $jogada2 == 'tesoura' || $jogada2 == 'pedra' && $jogada1 == 'tesoura') return 'pedra';
    return 'empate';
}