<?php

$input = (int) $argv[1];


function getYear($year): int
{
	return floor($year / 365);
}

function getMonth($month): int
{ {
		return floor(($month / 30) / 12);
	}
}

function getDay($day): int
{
	return ($day % 365) % 30;
}

function amountValues(int $day): array
{

	$anos = getYear($day);
	$meses = getMonth($day);
	$dias = getDay($day);

	return [
		'Year(s)' => $anos,
		'Month(s)' => $meses,
		'Day(s)' => $dias,
	];
}


foreach (amountValues($input) as $key => $value) {
	print_r($key . ": " . $value . PHP_EOL);
}
