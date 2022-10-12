// TIPOS DE TRIÂNGULOS

const arg1 = Number(process.argv.slice(2, 3));
const arg2 = Number(process.argv.slice(3, 4));
const arg3 = Number(process.argv.slice(4, 5));

var lado1 = 0;
var lado2 = 0;
var lado3 = 0;

// Verificação a organização de lados.

if (arg1 <= arg2 && arg1 <= arg3) {
	lado3 = arg1;
	if (arg2 <= arg3) {
		lado2 = arg2;
		lado1 = arg3;
	} else {
		lado2 = arg3;
		lado1 = arg2;
	}
} else if (arg2 <= arg1 && arg2 <= arg3) {
	lado3 = arg2;
	if (arg1 <= arg3) {
		lado2 = arg1;
		lado1 = arg3;
	} else {
		lado2 = arg3;
		lado1 = arg1;
	}
} else if (arg3 < arg1) {
	lado3 = arg3;
	if (arg1 < arg2) {
		lado2 = arg1;
		lado1 = arg2;
	} else {
		lado2 = arg2;
		lado1 = arg1;
	}
}

// Classificação

if (lado1 >= lado2 + lado3) {
	console.log("NAO FORMA TRIANGULO");
} else {
	if (Math.pow(lado1, 2) == Math.pow(lado2, 2) + Math.pow(lado3, 2)) {
		console.log("TRIANGULO RETANGULO");
	}

	if (Math.pow(lado1, 2) > Math.pow(lado2, 2) + Math.pow(lado3, 2)) {
		console.log("TRIANGULO OBTUSANGULO");
	}

	if (Math.pow(lado1, 2) < Math.pow(lado2, 2) + Math.pow(lado3, 2)) {
		console.log("TRIANGULO ACUTANGULO");
	}

	if (lado1 == lado2 && lado1 == lado3) {
		console.log("TRIANGULO EQUILATERO");
	}

	if (
		(lado1 == lado2 && lado1 != lado3) ||
		(lado1 == lado3 && lado1 != lado2) ||
		(lado2 == lado3 && lado2 != lado1)
	) {
		console.log("TRIANGULO ISOSCELES");
	}
}
