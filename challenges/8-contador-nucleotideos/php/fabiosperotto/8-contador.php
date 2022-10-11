<?php
if($argc < 2){
    echo "Parâmetro de entrada não informado\n";
    exit;
}
$stringEntrada = strtoupper($argv[1]); //pegando input e normalizando para caixa alta (facilita comparacoes futuras e flexibiliza a entrada)
$entradaArray = str_split($stringEntrada); //convertendo a string de input em array pois foreach eh mais rapido que for nestes processamentos
validaSequenciaDNA($entradaArray);
echo processaSequenciamentoDNA($entradaArray);


/**
 * Avalia se uma dada string é uma sequência de DNA válida
 *
 * @param array $entrada string informada como input do comando
 * @return void interrompe a execucao da ferramenta com a mensagem de erro explicativa
 */
function validaSequenciaDNA($entrada){

    $nucleotideos = ['A', 'C', 'G', 'T'];

    foreach($entrada as $letra){
        if(!in_array($letra, $nucleotideos)){
            echo "Sequência de DNA inválida\n";
            exit;
        }
    }
}


/**
 * Contabiliza os nucleotídeos de uma sequência de DNA
 *
 * @param array $sequencia string de sequencia de DNA para processamento
 * @return string com o resultado contabilizando o total d eletras por nucleotideo
 */
function processaSequenciamentoDNA($sequencia){
    $nucleotideoA = 0;
    $nucleotideoC = 0;
    $nucleotideoG = 0;
    $nucleotideoT = 0;

    foreach($sequencia as $letra){
        if($letra == 'A') $nucleotideoA++;
        if($letra == 'C') $nucleotideoC++;
        if($letra == 'G') $nucleotideoG++;
        if($letra == 'T') $nucleotideoT++;
    }

    return "'A': $nucleotideoA, 'C': $nucleotideoC, 'G': $nucleotideoG, 'T': $nucleotideoT\n";
}