const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite o primeiro número : ', firstNumber => {
  readline.question('Digite o segundo número : ' , secondNumber => {
      let prod = parseInt(firstNumber * secondNumber);
      console.log("Resultado do produto: " + prod);
      readline.close();
  }) 
});