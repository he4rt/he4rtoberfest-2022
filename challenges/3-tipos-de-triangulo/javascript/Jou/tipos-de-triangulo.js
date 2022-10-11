process.argv.sort()
process.argv.reverse()

const a = process.argv[2]
const b = process.argv[3]
const c = process.argv[4]

if (a >= (b + c)) {
    console.log("NÃO FORMA TRIÂNGULO")
} else {
    if ((a*a) === ((b*b) + (c*c))) {
        console.log("TRIÂNGULO RETÂNGULO")
    } if ((a*a) > ((b*b) + (c*c))) {
        console.log("TRIÂNGULO OBSTUSÂNGULO")
    } if ((a*a) < ((b*b) + (c*c))) {
        console.log("TRIÂNGULO ACUTÂNGULO")
    } if (a === b && b === c) {
        console.log("TRIÂNGULO EQUILÁTERO")
    } else if (a === b || b === c || a ===c) {
        console.log("TRIÂNGULO ISÓSCELES")
    } 
}
