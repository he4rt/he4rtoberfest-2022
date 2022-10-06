const args = process.argv.slice(2);

const firstNumber = parseInt(args[0]);
const secondNumber = parseInt(args[1]);

const product = firstNumber * secondNumber;
console.log('PRODUTO = ' + product);