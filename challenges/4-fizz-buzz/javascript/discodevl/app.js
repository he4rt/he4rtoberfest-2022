const readline = require("readline");

function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i < 3) console.log(i);
    else if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz")
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question('Insert number:', num => {
    fizzbuzz(num);
    input.close();
});