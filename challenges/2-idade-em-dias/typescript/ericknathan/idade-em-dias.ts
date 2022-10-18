const prefix = '[he4rtoberfest]';
const input = process.argv[2];

const daysInYear = 365;
const daysInMonth = 30;

if(!input) throwInvalidArgumentError();
if(isNaN(Number(input))) throwInvalidNumberError(input);

calculateAge(Number(input));

function throwInvalidNumberError(arg: string) {
  console.log(`${prefix} O argumento "${arg}" não é um número válido.`);
  process.exit(1);
}

function throwInvalidArgumentError() {
  console.log(`${prefix} Por favor, informe uma quantidade de dias válida.`);
  process.exit(1);
}

function calculateAge(amountOfDays: number) {
  const years = Math.floor(amountOfDays / daysInYear);
  const months = Math.floor((amountOfDays % daysInYear) / daysInMonth);
  const days = Math.floor((amountOfDays % daysInYear) % daysInMonth);

  console.log(`${prefix} Idade em dias:
  ${years} ano(s)
  ${months} mes(es)
  ${days} dia(s)`);
  process.exit(0);
}