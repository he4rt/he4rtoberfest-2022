const inputNumber = +process.argv[2];

const fizzBuzz = () => {
    let currentNumber = 1;

    while (currentNumber <= inputNumber) {

        if (currentNumber % 3 === 0 && currentNumber % 5 === 0) console.log(`FizzBuzz`);
        else if (currentNumber % 3 === 0) console.log(`Fizz`);
        else if (currentNumber % 5 === 0) console.log(`Buzz`);
        else console.log(currentNumber);

        currentNumber++;
    };
};
fizzBuzz();