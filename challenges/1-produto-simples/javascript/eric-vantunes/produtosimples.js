const number1 = process.argv[2];
const number2 = process.argv[3];

const calculaProduto = (x, y) => { let PROD = x * y; return console.log(`Produto: ${PROD}`);}

calculaProduto(number1, number2);