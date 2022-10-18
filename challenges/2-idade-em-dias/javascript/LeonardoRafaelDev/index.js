const Daysinput = process.argv[2];

const anos = parseInt(Daysinput / 365);
const meses = parseInt((Daysinput % 365) / 30);
const dias = parseInt((Daysinput % 365) % 30);

console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");
