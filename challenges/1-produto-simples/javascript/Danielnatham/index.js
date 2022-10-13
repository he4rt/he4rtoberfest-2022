const [firstInput, secondInput] = process.argv.slice(2);

const produto = firstInput * secondInput;

console.log(`produto: ${produto}`);