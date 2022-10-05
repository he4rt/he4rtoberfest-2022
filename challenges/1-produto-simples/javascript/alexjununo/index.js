const [ a, b ] = process.argv.slice(2);

const PROD = a * b;

console.log(`PROD = ${PROD}`);