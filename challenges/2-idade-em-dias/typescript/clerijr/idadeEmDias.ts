let arg_dias: number = Number(process.argv.slice(2, 3))

const anos: number = Math.trunc(arg_dias/365)
const meses: number = Math.trunc((arg_dias - (anos*365))/30)
const dias: number = arg_dias - (anos*365 + meses*30)


console.log(`${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)\n`)