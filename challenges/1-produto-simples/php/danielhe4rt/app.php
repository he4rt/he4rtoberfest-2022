<?php

function produto(int $a, int $b): int
{
    return $a * $b;
}

echo sprintf("Produto: %s %s", produto($argv[1], $argv[2]), PHP_EOL);
