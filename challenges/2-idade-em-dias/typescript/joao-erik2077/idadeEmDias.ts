const diasDeVida = Number(process.argv.slice(2, 3));

const anos = Math.floor(diasDeVida / 365);
const meses = (Math.floor(diasDeVida / 30)) % 12;
const dias = (diasDeVida % 365) % 30;

console.log(`
${anos} ano(os)
${meses} mes(es)
${dias} dia(s)
`);
