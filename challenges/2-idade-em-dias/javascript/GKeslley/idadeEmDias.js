let days = parseInt(process.argv[2]);

let yearsProd = Math.round(days / 365);
let monthProd = Math.round((days % 365) / 30);
let daysProd = Math.round((days % 365) % 30);

console.log(`${yearsProd} ano(s)\n${monthProd} mes(es)\n${daysProd} dia(s)
`);
