const endNumber = parseInt(process.argv.slice(2)[0])

for (let start = 1; start <= endNumber; start++) {
    let messageToDisplay = start

    let isFizz = (start % 3) === 0 ? messageToDisplay = 'Fizz' : false
    let isBuzz = (start % 5) === 0 ? messageToDisplay = 'Buzz' : false

    if (isFizz && isBuzz) {
        messageToDisplay = 'FizzBuzz'
    }

    console.log(messageToDisplay)
}