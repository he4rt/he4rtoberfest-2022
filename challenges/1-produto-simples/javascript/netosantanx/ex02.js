const simpleProduct = () => {
  const firstArg = parseInt(process.argv[2]);
  const secArg = parseInt(process.argv[3]);
  const PROD = firstArg * secArg;

  if (!firstArg || !secArg) {
    console.log(`Passe números como parâmetro da operação`);
  } else {
    console.log(`produto: ${PROD}`);
  }
}
simpleProduct();
