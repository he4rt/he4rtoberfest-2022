const consoleInput = process.argv.slice(2)

if (!consoleInput || (consoleInput.length % 2) != 0) {
    process.exit(1)
}

const multiply = (x, y) => x * y

consoleInput.forEach((number, index) => {
    number = parseFloat(number)

    if (((index + 1) % 2) != 0) {
        let secondNumber = consoleInput[index + 1]

        console.log(
            `A multiplicação entre ${number} e ${secondNumber} é igual a ${multiply(number, secondNumber)}`
        )
    }
})