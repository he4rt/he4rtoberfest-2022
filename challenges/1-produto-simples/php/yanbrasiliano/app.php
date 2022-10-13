<?php 

##  CHALLENG 1 - PRODUTO SIMPLES 


## FUNCTION TO multiplication values.
function multiplication(int $valueA, int $valueB): int
{
    return $valueA * $valueB;
}


## Verify if value is set correctly.
echo $response = (isset($argv[1]) && isset($argv[2])) ? 'Total value is: ' . multiplication($argv[1], $argv[2]) . PHP_EOL : "Value not set, try again." . PHP_EOL;
