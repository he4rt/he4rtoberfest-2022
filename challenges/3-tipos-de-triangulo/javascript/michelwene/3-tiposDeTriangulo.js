const myArguments = process.argv.slice(2);

const typeOfTriangle = (
  firstPointFloating,
  secondPointFloating,
  thirdPointFloating
) => {
  const orderedPoints = [
    firstPointFloating,
    secondPointFloating,
    thirdPointFloating,
  ].sort((a, b) => b - a);
  const a = orderedPoints[0];
  const b = orderedPoints[1];
  const c = orderedPoints[2];

  if (a >= b + c) {
    console.log("NAO FORMA TRIANGULO");
  } else if (a * 2 === b * 2 + c * 2) {
    console.log("TRIANGULO RETANGULO");
  } else if (a * 2 > b * 2 + c * 2) {
    console.log("TRIANGULO OBTUSANGULO");
  } else if (a * 2 < b * 2 + c * 2) {
    console.log("TRIANGULO ACUTANGULO");
  }

  if (a === b && b === c) {
    console.log("TRIANGULO EQUILATERO");
  } else if (a === b || b === c) {
    console.log("TRIANGULO ISOSCELES");
  }
};

typeOfTriangle(myArguments[0], myArguments[1], myArguments[2]);
