const array = [process.argv[2], process.argv[3], process.argv[4]]
array.sort((a, b) => a - b).reverse()

const a = array[0]
const b = array[1]
const c = array[2]

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