let n1 = process.argv[2];
let n2 = process.argv[3];
if (!isNaN(n1) || !isNaN(n2)) {
  const PROD = parseInt(n1 * n2);
  return console.log(`produto: ${PROD}`);
} else {
  return console.log("ERRO");
}
