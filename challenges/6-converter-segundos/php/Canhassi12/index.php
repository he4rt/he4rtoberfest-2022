<?php

class Tempo {
    private int $horas;
    private int $minutos;
    private int $segundos;

    public function __construct(int $tempoEmSegundos) {
        $this->horas = floor($tempoEmSegundos / (60 * 60));
        $this->minutos = floor(($tempoEmSegundos - ($this->horas * (60 * 60))) / 60);
        $this->segundos = floor(($tempoEmSegundos - ($this->horas * (60 * 60))) - ($this->minutos * 60));
    }

    public function printData(): void
    {
       echo sprintf("%02d:%02d:%02d", $this->horas, $this->minutos, $this->segundos);
    }
}

echo ('Ola, escreva numeros que represente um valor em segundos!!') .PHP_EOL;
$tempoEmSegundos = trim(fgets(STDIN)) . PHP_EOL;

$tempo = new Tempo($tempoEmSegundos);
$tempo->printData();
