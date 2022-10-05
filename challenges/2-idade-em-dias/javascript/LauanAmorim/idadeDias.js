let idadeDias = process.argv;

function Converter(dias) {  
    anos = Math.floor(dias/365);
    meses = Math.floor((dias%365) / 30);
    dias = Math.floor((dias%365) % 30);

    if (meses >= 12)
    {
      anos = 1;
      meses = 0;
      console.log(`${anos} ano(s) \n ${meses} mes(es) \n ${dias} dia(s)`);
    } else
    {
      console.log(`${anos} ano(s) \n ${meses} mes(es) \n ${dias} dia(s)`);
    }
}

Converter(idadeDias[2]);