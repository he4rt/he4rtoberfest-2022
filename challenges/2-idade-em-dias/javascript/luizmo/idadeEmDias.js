// author: luizmo

const arg = process.argv[2]
const year = parseInt(n / 365)
const month = parseInt((n % 365) / 30)
const day = (n % 365) % 30

const stringYear = year > 1 ? `${year} anos,` : `${year} ano,`
const stringMonth = month > 1 ? `${month} meses,` : `${month} mês,`
const stringDay = day > 1 ? `${day} dias` : `${day} dia`

console.log(stringYear, stringMonth, stringDay)