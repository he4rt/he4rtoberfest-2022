const n = Number(process.argv.slice(2, 4));

for (let num = 1; num <= n; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");

    } else if (num % 3 === 0) {
        console.log("Fizz");
        
    } else if (num % 5 === 0) {
        console.log("Buzz");

    } else {
        console.log(num);
    };
};