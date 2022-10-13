let n1 = process.argv[2];
let n2 = process.argv[3];
function produtoSimples(a, b) {
  let result = a * b;
  return console.log(`Produto: ${result}`);
}
produtoSimples(n1, n2);
