const args = process.argv.slice(2);

const firstNumber = parseInt(args[0]);
const secondNumber = parseInt(args[1]);

const PROD = firstNumber * secondNumber;
console.log('produto: ' + PROD);