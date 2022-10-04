const myArgs = process.argv.slice(2);

const firstArg = parseInt(myArgs[0]);
const secondArg = parseInt(myArgs[1]);

const product = firstArg * secondArg;

console.log(`produto: ${product}`);
