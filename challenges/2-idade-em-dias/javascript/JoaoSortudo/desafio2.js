let n = process.argv[2]

    let ano = parseInt(n / 365);
    let mês = parseInt((n % 365) / 30);
    let dias = (n % 365) % 30;
    console.log(ano,"ano(s)", mês, "mes(es)", dias, "dia(s)");
