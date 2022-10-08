const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Primeiro valor: ', (primeiroValor) => {

  readline.question('Segundo valor: ', (segundoValor) => {

    let PROD = primeiroValor * segundoValor;

    console.log(`produto: ${PROD}`);

    readline.close();

  });

});
