const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Insira dois números: ", (num) => {
  const [num1, num2] = num.split(" ");
  const PROD = Number(num1) * Number(num2);
  console.log(`produto: ${PROD}`);
  readline.close();
});
