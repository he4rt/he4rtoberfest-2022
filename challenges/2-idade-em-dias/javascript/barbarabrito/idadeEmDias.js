const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

readline.question('Idade em dias: ', (idadeEmDias) => {

    let anos =  Math.floor(idadeEmDias / 365);
    let meses =  Math.floor((idadeEmDias % 365) / 30);
    let dias =  Math.floor((idadeEmDias % 365) % 30);
    
    console.log(`\n ${anos} ano(s) \n ${meses} mes(es) \n ${dias} dia(s) \n`)
    readline.close();

  });