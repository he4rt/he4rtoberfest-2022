var prompt = require('prompt-sync')()

const primeiroValor = prompt('Digite um valor inteiro: ')
const segundoValor = prompt('Digite outro valor inteiro: ')
const calculoProduto = Number(primeiroValor) * Number(segundoValor)

console.log(`produto: ${calculoProduto}`)
