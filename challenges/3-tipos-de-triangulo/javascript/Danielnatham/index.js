const lado1 = Number(process.argv.slice(2, 3));
const lado2 = Number(process.argv.slice(3, 4));
const lado3 = Number(process.argv.slice(4, 5));

if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    return console.log('Os lados devem ser maiores que zero');
}

if (lado1 >= lado2 + lado3 || lado2 >= lado1 + lado3 || lado3 >= lado1 + lado2) {
    return console.log('NÃO FORMA UM TRIÂNGULO');
} else if (lado1 ** 2 == lado2 ** 2 + lado3 ** 2 || lado2 ** 2 == lado1 ** 2 + lado3 ** 2 || lado3 ** 2 == lado1 ** 2 + lado2 ** 2) {
    console.log('TRIÂNGULO RETÂNGULO');
} else if (lado1 ** 2 > lado2 ** 2 + lado3 ** 2 || lado2 ** 2 > lado1 ** 2 + lado3 ** 2 || lado3 ** 2 > lado1 ** 2 + lado2 ** 2) {
    console.log('TRIÂNGULO OBTUSÂNGULO');
} else if (lado1 ** 2 < lado2 ** 2 + lado3 ** 2 || lado2 ** 2 < lado1 ** 2 + lado3 ** 2 || lado3 ** 2 < lado1 ** 2 + lado2 ** 2) {
    console.log('TRIÂNGULO ACUTÂNGULO');
}

if (lado1 == lado2 && lado2 == lado3) {
    console.log('TRIÂNGULO EQUILÁTERO');
} else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    console.log('TRIÂNGULO ISÓSCELES');
}

