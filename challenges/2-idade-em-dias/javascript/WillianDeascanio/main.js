const idadeEmDias = process.argv[2];

const anos = parseInt (idadeEmDias/365);
const meses = parseInt ((idadeEmDias % 365) / 30);
const dias = ((idadeEmDias % 365) % 30);

console.log(`${anos} ano(s), ${meses} mes(es), ${dias} dia(s)`);
