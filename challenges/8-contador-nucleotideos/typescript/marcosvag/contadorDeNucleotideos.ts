const input = process.argv[2];

function contadorDeNucleotideos(sequenciaDeDNA: string): void {
    const nucleotideos: { [nucleotideo: string]: number } = {
        "A": 0,
        "C": 0,
        "G": 0,
        "T": 0,
    }

    for (let e = 0; e < sequenciaDeDNA.length; e++) {
        if (sequenciaDeDNA[e] in nucleotideos) {
            nucleotideos[sequenciaDeDNA[e]]++;
        } else {
            return console.error(`"Sequência de DNA inválida"`);
        }
    }
    return console.log(`"'A': ${nucleotideos["A"]}, 'C': ${nucleotideos["C"]},'G': ${nucleotideos["G"]},'T': ${nucleotideos["T"]}"`);
}

contadorDeNucleotideos(input);