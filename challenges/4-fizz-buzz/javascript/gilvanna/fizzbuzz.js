const numero = process.argv[2];
let i = 1

while (i <= numero) {
    if ((i % 5) === 0 && (i % 3) === 0) {
        console.log("FizzBuzz")
    } else if ((i % 3) == 0) {
        console.log("Fizz")
    } else if((i % 5) == 0){
        console.log("Buzz")
    }else {
        console.log(i)
    }
    i++
}