<?php
$valorMax = intval($argv[1]);
if (!$valorMax) {
    echo "[Argumento inválido] : Insira um número".PHP_EOL;
    die();
}
for ($valorAtual = 1; $valorAtual <= $valorMax; $valorAtual++) {
    if ($valorAtual % 3 == 0 && $valorAtual % 5 == 0) {
        echo "FizzBuzz".PHP_EOL;
    } else if ($valorAtual % 3 == 0) {
        echo "Fizz".PHP_EOL;
    } else if ($valorAtual % 5 == 0) {
        echo "Buzz".PHP_EOL;
    } else {
        echo $valorAtual.PHP_EOL;
    }
}
