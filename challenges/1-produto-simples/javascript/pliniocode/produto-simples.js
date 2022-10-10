function product(a, b) {
  return a * b;
}

let args = process.argv.slice(2);
const a = +args[0]
const b = +args[1]
const result = product(a, b)

console.log(`Produto: ${result}`);