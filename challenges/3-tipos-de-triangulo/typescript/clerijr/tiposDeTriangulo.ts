let arg_A: number = Number(process.argv.slice(2, 3))
let arg_B: number = Number(process.argv.slice(3, 4))
let arg_C: number = Number(process.argv.slice(4, 5))

let response: string = ''

if (arg_A >= arg_B + arg_C) response += 'NAO FORMA TRIANGULO\n'
if (arg_A ** 2 == arg_B ** 2 + arg_C ** 2) response += 'TRIANGULO RETANGULO\n'
if (arg_A ** 2 > arg_B ** 2 + arg_C ** 2) response += 'TRIANGULO OBTUSANGULO\n'
if (arg_A ** 2 < arg_B ** 2 + arg_C ** 2) response += 'TRIANGULO ACUTANGULO\n'
if (arg_A == arg_B && arg_B == arg_C) {
    response += 'TRIANGULO EQUILATERO\n'
} else if (arg_A == arg_B && arg_B == arg_C && arg_A == arg_C) { 
    response += 'TRIANGULO ISOSCELES\n' 
}

console.log(response)