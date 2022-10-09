const idade = process.argv[2];
function conversao(valor){
    anos = Math.floor(valor/365);
    meses = Math.floor((valor%365)/30);
    dias = Math.floor((valor%365)%30);
if (meses >= 12) {
    anos++;
    meses = 0;
}
    console.log(`${anos} ano(s) ${meses} mes(es) ${dias} dia(s)`);
}
conversao(idade);