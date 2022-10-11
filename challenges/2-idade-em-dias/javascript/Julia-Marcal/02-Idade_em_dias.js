const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Idade_dias(idade){
    let ano = parseInt(idade/365);
    let mes = parseInt((idade-(365*ano))/30);
    let dias = parseInt((idade-((365*ano)+(30*mes)))%30);

    console.log(`No total são: \n${ano} ano(s)`);
    console.log(`${mes} mês/meses`);
    console.log(`${dias} dia(s)`);
}

rl.question('Quantos dias quer converter?\n', (userinput)=>{
    if(isNaN(userinput.trim)){
        rl.setPrompt('A informação dada não é um número');
        rl.prompt();
        rl.close();
    }
    else{
        console.log(Idade_dias(userinput));
        rl.close();
    }
}
);