let number1 = process.argv[2];
let number2 = process.argv[3];

function calcProduct(x, y) {
  let PROD = x * y;
  return console.log(`O produto dessa multiplicação é: ${PROD}`);
}

calcProduct(number1, number2);
