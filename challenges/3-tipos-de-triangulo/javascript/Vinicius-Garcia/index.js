const valor1 = Number(process.argv.slice(2, 3));
const valor2 = Number(process.argv.slice(3, 4));
const valor3 = Number(process.argv.slice(4, 5));

const lados = [valor1, valor2, valor3].sort((a, b) => a - b).reverse();

const ladoA = lados[0];
const ladoB = lados[1];
const ladoC = lados[2];

if (ladoA < 0 || ladoB < 0 || ladoC < 0) {
  return console.log("NÃO É PERMITIDO VALOR MENOR QUE ZERO (0)");
}

if (ladoA >= ladoB + ladoC) {
  console.log("NAO FORMA TRIANGULO");
} else if (ladoA ** 2 === ladoB ** 2 + ladoC ** 2) {
  console.log("TRIANGULO RETANGULO");
} else if (ladoA ** 2 > ladoB ** 2 + ladoC ** 2) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (ladoA ** 2 < ladoB ** 2 + ladoC ** 2) {
  console.log("TRIANGULO ACUTANGULO");
}

if (ladoA === ladoB && ladoB === ladoC) {
  console.log("TRIANGULO EQUILATERO");
} else if (ladoA === ladoB || ladoB === ladoC) {
  console.log("TRIANGULO ISOSCELES");
}
