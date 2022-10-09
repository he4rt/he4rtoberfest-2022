const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Qual o primeiro número?: ', firstNumber => {
    readline.question('Qual o segundo número?: ' , secondNumber => {
        let prod = parseInt(firstNumber * secondNumber);
        console.log("produto: " + prod);
        readline.close();
    }) 
});