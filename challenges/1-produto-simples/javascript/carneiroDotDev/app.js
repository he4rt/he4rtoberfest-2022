const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Fale qual o primeiro numero? ', function (num1) {
  rl.question('Fale qual o segundo numero? ', function (num2) {
    console.log(`O produto simples entre os dois números é ${num1 * num2}`);
    rl.close();
  });
});

rl.on('close', function () {
  process.exit(0);
});