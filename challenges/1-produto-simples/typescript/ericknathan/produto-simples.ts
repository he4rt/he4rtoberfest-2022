const prefix = '[he4rtoberfest]';
const firstNumber = process.argv[2];
const secondNumber = process.argv[3];

if(!firstNumber || !secondNumber) throwInvalidArgumentError();
if(isNaN(Number(firstNumber))) throwInvalidNumberError(firstNumber);
if(isNaN(Number(secondNumber))) throwInvalidNumberError(secondNumber);

calculateProduct(Number(firstNumber), Number(secondNumber));

function throwInvalidNumberError(arg: string) {
  console.log(`${prefix} O argumento "${arg}" não é um número válido.`);
  process.exit(1);
}

function throwInvalidArgumentError() {
  console.log(`${prefix} Por favor, informe 2 números válidos.`);
  process.exit(1);
}

function calculateProduct(firstNumber: number, secondNumber: number) {
  const product = firstNumber * secondNumber;
  const productString = `(${firstNumber} x ${secondNumber})`;
  console.log(`${prefix} Resultado do produto ${productString}: ${product}`);
  process.exit(0);
}