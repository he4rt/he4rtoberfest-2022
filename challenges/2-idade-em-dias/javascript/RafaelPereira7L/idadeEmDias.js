const diasArg = process.argv[2];

const anos = parseInt(diasArg / 365);
const meses = parseInt((diasArg % 365) / 30);
const dias = parseInt((diasArg % 365) % 30);

console.log(anos+ ' ano(s)')
console.log(meses+ ' mes(es)')
console.log(dias+ ' dia(s)')
