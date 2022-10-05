const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Digite um número: `, (valor) => {
  for (i = 1; i <= valor; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  readline.close();
});
