const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question('Digite o primeiro numero: ', (primeiroValor) => {
    rl.question('Digite o segundo numero: ', (segundoValor) => {
        console.log(`${primeiroValor} x ${segundoValor} = ${primeiroValor * segundoValor}`);
    })
});