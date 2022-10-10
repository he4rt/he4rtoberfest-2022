<?php

if(!isset($argv[1])){
    echo 'hello world!';
}else{
    $name = $argv[1];
    echo 'hello '.$name.'!';
}