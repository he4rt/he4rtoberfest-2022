let arg_x: number = Number(process.argv.slice(2, 3))

for(let i: number = 1; i <= arg_x; i++) {
    let message: string = i.toString()
    if(i%3 == 0 && i%5 != 0) {message = 'Fizz'}
    if(i%3 != 0 && i%5 == 0) {message = 'Buzz'}
    if(i%3 == 0 && i%5 == 0) {message = 'FizzBuzz'}
    console.log(message)
}