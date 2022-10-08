interface TypeNumbers {
  firstNumber: number;
  secondNumber: number;
}

function getResult({ firstNumber, secondNumber }: TypeNumbers) {
  let result: number = firstNumber * secondNumber;
  return result;
}

console.log(getResult(2, 4));

