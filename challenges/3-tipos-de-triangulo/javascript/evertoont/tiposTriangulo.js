const argvA = Number(process.argv.slice(2, 3));
const argvB = Number(process.argv.slice(3, 4));
const argvC = Number(process.argv.slice(4, 5));

const sides = [argvA, argvB, argvC].sort((a, b) => a - b).reverse();

const sideA = sides[0];
const sideB = sides[1];
const sideC = sides[2];

if (sideA < 0 || sideB < 0 || sideC < 0) {
  return console.log("NÃO É PERMITIDO VALOR MENOR QUE ZERO (0)");
}

if (sideA >= sideB + sideC) {
  console.log("NAO FORMA TRIANGULO");
} else if (sideA ** 2 === sideB ** 2 + sideC ** 2) {
  console.log("TRIANGULO RETANGULO");
} else if (sideA ** 2 > sideB ** 2 + sideC ** 2) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (sideA ** 2 < sideB ** 2 + sideC ** 2) {
  console.log("TRIANGULO ACUTANGULO");
}

if (sideA === sideB && sideB === sideC) {
  console.log("TRIANGULO EQUILATERO");
} else if (sideA === sideB || sideB === sideC) {
  console.log("TRIANGULO ISOSCELES");
}
