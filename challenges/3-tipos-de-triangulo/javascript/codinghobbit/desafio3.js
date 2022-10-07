function isTriangle(a, b, c) {
  return !(a >= b + c);
}

function triangleType(a, b, c) {
  return a === b && b === c
    ? "TRIANGULO EQUILATERO"
    : a === b || b === c || c === a
    ? "TRIANGULO ISOSCELES"
    : "TRIANGULO ESCALENO";
}

function triangleAngle(a, b, c) {
  return Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2)
    ? "TRIANGULO ACUTANGULO"
    : Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)
    ? "TRIANGULO OBTUSANGULO"
    : "TRIANGULO RETANGULO";
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Insira a medida dos três lados do triângulo: ", (edges) => {
  const edgesArr = edges.split(" ");
  const edgesArrSorted = edgesArr.sort((a, b) => a - b);
  const [A, B, C] = edgesArrSorted.reverse();
  if (isTriangle(A, B, C)) {
    console.log(triangleAngle(A, B, C));
    console.log(triangleType(A, B, C));
  } else console.log("NAO FORMA TRIANGULO");
  readline.close();
});
