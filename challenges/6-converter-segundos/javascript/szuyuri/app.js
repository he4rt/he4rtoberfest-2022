const oneHourInSeconds = 3600
const oneMinuteInSeconds = 60

const secondsInput = parseInt(process.argv.slice(2)[0])

const isNumberLessThanTen = (n) => n < 10
const addZeroToNumber = (stringToModify) => '0' + stringToModify

let secondsCounter = 0

let hours = Math.floor(secondsInput / oneHourInSeconds)
secondsCounter = secondsInput - hours * oneHourInSeconds

let minutes = Math.floor(secondsCounter / oneMinuteInSeconds)
secondsCounter -= minutes * oneMinuteInSeconds

hours = isNumberLessThanTen(hours) ? addZeroToNumber(hours.toString()) : hours
minutes = isNumberLessThanTen(minutes) ? addZeroToNumber(minutes.toString()) : minutes
secondsCounter = isNumberLessThanTen(secondsCounter) ? addZeroToNumber(secondsCounter.toString()) : secondsCounter

console.log(`${hours}:${minutes}:${secondsCounter}`)