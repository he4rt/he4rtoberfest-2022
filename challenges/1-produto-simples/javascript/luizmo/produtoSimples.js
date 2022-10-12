// author: luizmo

const args = process.argv.slice(2);
const firstArg = parseInt(args[0]);
const secondArg = parseInt(args[1]);

const result = parseInt(firstArg) * parseInt(secondArg);

console.log('PRODUTO: ' + result);