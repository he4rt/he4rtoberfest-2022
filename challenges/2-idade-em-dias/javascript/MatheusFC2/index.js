var dias = process.argv

function converte(num) {  
    ano = Math.floor(num/365);
    num -= ano * 365
    mes = Math.floor(num/30);
    num -= mes * 30;

    console.log(ano, " ano(s)");  
    console.log(mes, " mes(es)");  
    console.log(num, " dia(s)");  
}

var idadaEmDias = converte(dias[2])