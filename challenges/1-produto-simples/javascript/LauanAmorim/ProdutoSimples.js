let arg1 = process.argv[2];
let arg2 = process.argv[3];

function calcularProduto(x, y) {
  let PROD = x * y;
  return console.log(`Produto: ${PROD}`);
}

calcularProduto(arg1, arg2);
