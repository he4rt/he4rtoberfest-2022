const promptSync = require('prompt-sync')();

const numeroDeCasos = parseInt(promptSync('Qual o numero de casos de testes? '));
const casos: { [caso: string]: number; } = {
    'R': 0,
    'S': 0,
    'C': 0,
    'TOTAL': 0,
};

function alocarCasos(numDeCasos: number): void {
    for (let e = 1; e <= numDeCasos; e++) {
        let caso = promptSync(`Caso ${e}: `);
        let numeroCobaiasCaso = parseInt(caso);
        casos[caso[caso.length - 1]] += numeroCobaiasCaso;
        casos['TOTAL'] += numeroCobaiasCaso;
    }
    analizarCasos();
}

function analizarCasos(): void {
    const casosTotal = casos['TOTAL'];
    const coelhosTotal = casos['C'];
    const ratosTotal = casos['R'];
    const saposTotal = casos['S'];

    const calcPorcentagem = (num: number, total: number = casosTotal): string => (num * 100 / total).toFixed(2);
    const coelhosPorcentagem = calcPorcentagem(coelhosTotal);
    const ratosPorcentagem = calcPorcentagem(ratosTotal);
    const saposPorcentagem = calcPorcentagem(saposTotal);

    console.log(`\nTotal: ${casosTotal} cobaias`);
    console.log(`Total de coelhos: ${coelhosTotal}`);
    console.log(`Total de ratos: ${ratosTotal}`);
    console.log(`Total de sapos: ${saposTotal}`);
    console.log(`Percentual de coelhos: ${coelhosPorcentagem} %`);
    console.log(`Percentual de ratos: ${ratosPorcentagem} %`);
    console.log(`Percentual de sapos: ${saposPorcentagem} %\n`);
}

alocarCasos(numeroDeCasos)