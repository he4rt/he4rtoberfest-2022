const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Valor 1: ", firstValue =>
  readline.question("Valor 2: ", secondValue => {
    console.log(
      `Produto: ${
        firstValue * secondValue || "Um ou mais valores são inválidos"
      }`
    );
    readline.close();
  })
);
