const readline = require("readline")

const rl =
 readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Digite o primeiro número: ', function (first) {
  rl.question('Digite o segundo número: ', function (second) {
    let result = first * second;
    console.log(`O resultado do produto é ${result}`);
    rl.close();
  });
});
