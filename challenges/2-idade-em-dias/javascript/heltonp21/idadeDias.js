let idade = process.argv[2]

const anos = parseInt(idade / 365)
const meses = parseInt((idade % 365) / 30)
const dias = (idade % 365) % 30

console.log(`
${anos} ano(s)
${meses} mes(es)
${dias} dia(s)
`)