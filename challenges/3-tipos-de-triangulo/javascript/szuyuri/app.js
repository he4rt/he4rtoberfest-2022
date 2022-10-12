const [sideA, sideB, sideC] = process.argv
    .slice(2)
    .map(parseFloat)
    .sort((a, b) => b - a)

if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    process.exit(1)
}

let aSquared = sideA * sideA
let bSquared = sideB * sideB
let cSquared = sideC * sideC

let sumOfBAndCSquared = bSquared + cSquared

if (sideA >= (sideB + sideC)) {
    console.log('NAO FORMA TRIANGULO')
} else if (aSquared === (sumOfBAndCSquared)) {
    console.log('TRIANGULO RETANGULO')
} else if (aSquared > (sumOfBAndCSquared)) {
    console.log('TRIANGULO OBTUSANGULO')
} else if (aSquared < (sumOfBAndCSquared)) {
    console.log('TRIANGULO ACUTANGULO')
}

if ((sideA === sideB) && (sideA === sideC) && (sideB === sideC)) {
    console.log('TRIANGULO EQUILATERO')
} else if ((sideA === sideB) || (sideB === sideC)) {
    console.log('TRIANGULO ISOSCELES')
}