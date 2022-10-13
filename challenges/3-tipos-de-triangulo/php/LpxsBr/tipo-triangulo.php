<?php

if (isset($argv[1]) and isset($argv[2]) and isset($argv[3])) {

    if ($argv[1] > 0 and $argv[2] > 0 and $argv[3] > 0) {

        $array = $argv;
        rsort($array);
        unset($array[0]);

        $A = $array[1]; 
        $B = $array[2];
        $C = $array[3];

        // echo $A.' '.$B.' '.$C;
        
        if($A >= ($B + $C)){
            echo 'NAO FORMA TRIANGULO';
        }
        elseif($A**2 == ($B**2 + $C**2)){
            echo 'TRIANGULO RETANGULO';
        }
        elseif($A**2 > ($B**2 + $C**2)){
            echo 'TRIANGULO OBTUSANGULO';
        }
        elseif($A**2 < ($B**2 + $C**2)){
            echo 'TRIANGULO ACUTANGULO';
        }
        elseif($A === $B and $B === $C){
            echo 'TRIANGULO EQUILATERO';
        }
        elseif(($A == $B) || ($A == $C)){
            echo 'TRIANGULO ISÓCELES';
        }

    }else{

        echo "valores inseridos precisam ser maior que 0";
    }

} else {

    echo "sem valores inseridos, tente novamente";

}