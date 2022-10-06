const consoleInput = process.argv.slice(2)

if (!consoleInput || (consoleInput.length % 2) != 0) {
    process.exit(1)
}

const multiply = (x, y) => x * y

consoleInput.forEach((number, index) => {
    number = parseFloat(number)
    let secondNumber = parseFloat(consoleInput[index + 1])

    if (isNaN(number) || isNaN(secondNumber)) {
        process.exit(1)
    }

    if (((index + 1) % 2) != 0) {
        const PROD = multiply(number, secondNumber)

        console.log(
            `A multiplicação entre ${number} e ${secondNumber} é igual a ${PROD}`
        )
    }
})