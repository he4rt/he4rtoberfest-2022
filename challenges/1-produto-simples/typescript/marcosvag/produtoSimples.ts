function produtoSimples(fatorUm: string, fatorDois: string): void {
    const parsedFatorUm = parseFloat(fatorUm);
    const parsedFatorDois = parseFloat(fatorDois);

    if(!isNaN(parsedFatorUm) && !isNaN(parsedFatorDois)) {
        const produto = parsedFatorUm * parsedFatorDois;
        console.log(produto)
    }else {
        console.error(`Um dos argumentos passados não é um número! Verifique os argumentos e tente novamente: { argv1: ${fatorUm}, argv2: ${fatorDois} }.`)
    }

    return;
}

produtoSimples(process.argv[2], process.argv[3])