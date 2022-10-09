const x = Number(process.argv[2]);

if(x <= 0) return console.log("Por favor, insira um número maior que 0.");

for (let i = 1; i <= x; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}