function fizzBuzz(x, start = 1) {
  start % 3 == 0 && start % 5 == 0
    ? console.log("FizzBuzz")
    : start % 3 == 0
    ? console.log("Fizz")
    : start % 5 == 0
    ? console.log("Buzz")
    : console.log(start);

  if (start == x) return;
  return fizzBuzz(x, start + 1);
}
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Insira um inteiro: ", (x) => {
  fizzBuzz(x);
  readline.close();
});
