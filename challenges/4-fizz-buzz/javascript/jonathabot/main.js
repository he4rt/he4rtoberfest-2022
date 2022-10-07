const input = process.argv.splice(2);

const valor = input[0];

for (i = 1; i <= valor; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('fizz')
    } else if (i % 5 == 0) {
        console.log('Buzz');
    }else {
        console.log(i);
    }
}