const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question('Digite o primeiro número: ', (primeiroValor) => {
    rl.question('Digite o segundo número: ', (segundoValor) => {
        console.log(`${primeiroValor} x ${segundoValor} = ${primeiroValor * segundoValor}`);
    })
});