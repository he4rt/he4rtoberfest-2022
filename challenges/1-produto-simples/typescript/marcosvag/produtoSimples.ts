let PROD: number;

function produtoSimples(fatorUm: string, fatorDois: string): void {
    const parsedFatorUm = parseFloat(fatorUm);
    const parsedFatorDois = parseFloat(fatorDois);

    if(isNaN(parsedFatorUm) || isNaN(parsedFatorDois)) {
        console.error(`Um ou mais dos argumentos passados não é um número! Verifique os argumentos e tente novamente: { argv1: ${fatorUm}, argv2: ${fatorDois} }.`);
    }else {
        PROD = parsedFatorUm * parsedFatorDois;
        console.log(PROD);
    }

    return;
}

produtoSimples(process.argv[2], process.argv[3]);