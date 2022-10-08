<?php

function hw($name = ''){
    
    $resp = $name == '' ? 'world' : $name;
    $phrase = 'hello '.$resp.'!';
    return $phrase;

}

echo hw($argv[1]);

?>