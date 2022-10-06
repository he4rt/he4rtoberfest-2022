<?php

$x = (int)readline("Entrada: ");

echo "saida" . PHP_EOL;
for ($i = 1; $i <= $x; $i++) {
    if (($i % 3 == 0) && ($i % 5 == 0)) {
        echo "FizzBuzz" . PHP_EOL;
    } else if ($i % 3 == 0) {
        echo "Fizz" . PHP_EOL;
    } else if ($i % 5 == 0) {
        echo "Buzz" . PHP_EOL;
    } else {
        echo $i . PHP_EOL;
    }
}
