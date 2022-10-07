const prompt = require('prompt-sync')();

const resultOptions = [ 'Empate', 'Rajesh', 'Sheldon'];
const winKeys = {
    "tesoura": ["papel", "lagarto"],
    "papel": ["pedra", "spock"],
    "pedra": ["lagarto", "tesoura"],
    "lagarto": ["spock", "papel"],
    "spock": ["tesoura", "pedra"]
}

const validateOptions = (rajesh, sheldon) => {
    if (rajesh === sheldon) return 0;
    if (winKeys[rajesh].includes(sheldon)) return 1;
    return 2;
};

const validateInputs = (rajesh, sheldon) => {
    const possibleOptions = Object.keys(winKeys);

    return possibleOptions.includes(rajesh) || possibleOptions.includes(sheldon);
}

const jokenpoNerd = () => {
    const rounds = prompt('Quantas rodadas? ');

    for (let i = 0; i < rounds; i++) {
        const [rajesh, sheldon] = prompt('Escolha Rajesh e Sheldon: (exemplo => tesoura papel) ').split(' ');

        if (!validateInputs(rajesh, sheldon)) return;

        const winner = validateOptions(rajesh, sheldon);

        console.log(resultOptions[winner]);
    }

    return;
};

jokenpoNerd();
