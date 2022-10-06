const n = process.argv[2]
const ano = parseInt(n / 365)
const mes = parseInt((n % 365) / 30)
const dias = (n % 365) % 30


console.log(ano,"ano(s)", mes, "mes(es)", dias, "dia(s)")