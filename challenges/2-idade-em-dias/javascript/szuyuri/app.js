const oneYearInDays = 365
const oneMonthInDays = 30

const ageInDays = parseInt(process.argv.slice(2)[0])

let countedDays = 0

let years = Math.floor(ageInDays / oneYearInDays)
countedDays = ageInDays - (years * oneYearInDays)

let months = Math.floor(countedDays / oneMonthInDays)
countedDays -= months * oneMonthInDays

let days = countedDays

console.log(`
    ${years} ano(s),
    ${months} mes(es),
    ${days} dia(s)
`)