let ladoA = parseFloat(process.argv[2]);
let ladoB = parseFloat(process.argv[3]);
let ladoC = parseFloat(process.argv[4]);

let numeros = [ladoA, ladoB, ladoC];
numeros.sort((a, b) => b - a);

ladoA = numeros[0];
ladoB = numeros[1];
ladoC = numeros[2];

if (ladoA >= (ladoB + ladoC)) {
    return console.log('NAO FORMA TRIANGULO');
} if (Math.pow(ladoA, 2) == (Math.pow(ladoB, 2) + Math.pow(ladoC, 2))) {
    console.log('TRIANGULO RETANGULO');
} if (Math.pow(ladoA, 2) > (Math.pow(ladoB, 2) + Math.pow(ladoC, 2))) {
    console.log('TRIANGULO OBTUSANGULO');
} if (Math.pow(ladoA, 2) < (Math.pow(ladoB, 2) + Math.pow(ladoC, 2))) {
    console.log('TRIANGULO ACUTANGULO');
} if (ladoA == ladoB && ladoB == ladoC) {
    console.log('TRIANGULO EQUILATERO');
} else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    console.log('TRIANGULO ISOSCELES');
}