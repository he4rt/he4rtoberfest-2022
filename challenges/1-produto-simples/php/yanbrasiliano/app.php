<?php 

##  CHALLENG 1 - PRODUTO SIMPLES 


## FUNCTION TO multiplication values.
function multiplication(int $valueA, int $valueB): int
{
    return $valueA * $valueB;
}


## Verify if value is set correctly.
echo $response = (isset($argv[1]) and isset($argv[2])) ? multiplication($argv[1], $argv[2]) : "Value not set, try again.";
