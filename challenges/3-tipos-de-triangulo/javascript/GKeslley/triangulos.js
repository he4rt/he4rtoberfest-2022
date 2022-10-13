const values = [process.argv[2], process.argv[3], process.argv[4]];
values.sort((a, b) => a - b).reverse();

const a = values[0];
const b = values[1];
const c = values[2];

if (a >= b + c) {
  console.log("NÃO FORMA TRIANGULO");
} else {
  if (a * a === b * b + c * c) {
    console.log("TRIÂNGULO RETANGULO");
  }
  if (a * a > b * b + c * c) {
    console.log("TRIÂNGULO OBSTUSANGULO");
  }
  if (a * a < b * b + c * c) {
    console.log("TRIÂNGULO ACUTANGULO");
  }
  if (a === b && b === c) {
    console.log("TRIÂNGULO EQUILATERO");
  } else if (a === b || b === c || a === c) {
    console.log("TRIÂNGULO ISOSCELES");
  }
}
