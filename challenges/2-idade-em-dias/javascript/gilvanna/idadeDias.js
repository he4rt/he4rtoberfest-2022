var idade = process.argv.slice(2,3)

const idadeAnos = Math.floor(idade / 365)
const sobraAnos = Math.floor(idade % 365)
const idadeMeses = Math.floor(sobraAnos / 30)
const idadeDias = (idade % 365) % 30

console.log(idadeAnos)

console.log(`
${idadeAnos} ano(s)
${idadeMeses} mes(es)
${idadeDias} dia(s)`)