import userInput from './input.js'

const YEAR_DAYS = 365
const MONTH_DAYS = 30

const daysInput = userInput()

const daysInt = parseInt(daysInput)

const years = daysInt / YEAR_DAYS

const months = (daysInt % YEAR_DAYS) / MONTH_DAYS

const days = (daysInt % YEAR_DAYS) % MONTH_DAYS

console.log(`${Math.round(years)} ano(s)`)
console.log(`${Math.round(months)} mes(es)`)
console.log(`${Math.round(days)} dia(s)`)
