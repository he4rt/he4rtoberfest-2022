
const firstArg = Number(process.argv.slice(2, 3))
const secondArg = Number(process.argv.slice(3, 4))

function calcularProdutoSimples(arg1: number, arg2: number): number {
    return arg1 * arg2
}

const PROD = calcularProdutoSimples(firstArg, secondArg)
console.log(`produto: ${PROD}`)