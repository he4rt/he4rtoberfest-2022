// :D
const numero = process.argv.slice(2);
if (isNaN(numero)){
  console.log("Valor não válido");
}
for (let i = 1; i <= numero; i++) {
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