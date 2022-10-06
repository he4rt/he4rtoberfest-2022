const fizzBuzz = (num) => {
  let result = "";
  for (let i = 1; i <= num; i++) {
    if (i !== 1) result += " ";
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;
    if (isFizz) result += "Fizz";
    if (isBuzz) result += "Buzz";
    if (!isFizz && !isBuzz) result += i;
  }
  return result;
};

console.log(fizzBuzz(16));
console.log(fizzBuzz(30));
