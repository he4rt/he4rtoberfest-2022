const firstNumber = parseInt(process.argv.slice(2, 3));
const secondNumber = parseInt(process.argv.slice(3, 4));

const PROD = firstNumber * secondNumber;

console.log(`produto: ${PROD}`);
