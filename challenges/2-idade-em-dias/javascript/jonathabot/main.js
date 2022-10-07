const readline = require('readline');

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

function transformarIdade(idade) {
    const anos = Math.floor(idade/365);
    const meses = Math.floor((idade % 365) / 30);
    const dias = Math.floor((idade % 365) % 30);

    console.log(anos + ' ano(s)');
    console.log(meses + ' mes(es)');
    console.log(dias + ' dia(s)');
}

rl.question('Qual a idade em dias?: ', idadeEmDias => {
    transformarIdade(idadeEmDias);
    rl.close();
})