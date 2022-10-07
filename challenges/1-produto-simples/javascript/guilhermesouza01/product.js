let firstValue = parseInt(process.argv[2]);
let secondValue = parseInt(process.argv[3]);

const PROD = firstValue * secondValue;

console.log(`produto: ${PROD}`);