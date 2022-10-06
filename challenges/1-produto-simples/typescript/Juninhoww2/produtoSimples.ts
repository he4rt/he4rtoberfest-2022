const valor1 = Number(process.argv.slice(2, 3));
const valor2 = Number(process.argv.slice(3, 2));
const produto = produtoSimples(valor1, valor2);

console.log(`produto: ${produto}`);

function produtoSimples(valor1: number, valor2: number): number {
    return valor1 * valor2;
}