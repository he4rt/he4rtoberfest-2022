const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
rl.question('Digite o primeiro número: ', (valueOne) => {
  rl.question('Digite o segundo número: ', (valueTwo) => {
     console.log(`${valueOne} x ${valueTwo} = ${valueOne * valueTwo}`);
   })
});
  