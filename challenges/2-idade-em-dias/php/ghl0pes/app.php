<?php
$daysAmount = $argv[1];

$howManyYears = (int)($daysAmount / 365);
$howManyMonths = (int)($daysAmount / 30) - ($howManyYears * 12);
$howManyDays = $daysAmount - (($howManyYears * 365) + ($howManyMonths * 30));

print_r("$howManyYears ano(s)" . PHP_EOL);
print_r("$howManyMonths mes(es)" . PHP_EOL);
print_r("$howManyDays dia(s)");