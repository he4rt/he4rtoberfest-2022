function somaProduto(numero1: number, numero2: number) {
  let resultado = numero1 * numero2;
  return console.log(`O valor do produto é de ${resultado}`);
}

function recebeValores() {
  let valor1 = Number(prompt("Insira o primeiro valor"));
  let valor2 = Number(prompt("Insira o segundo valor"));
  return somaProduto(valor1, valor2);
}

recebeValores()
