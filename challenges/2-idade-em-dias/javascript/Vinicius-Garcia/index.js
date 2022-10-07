const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite o número de dias: ', numberOfDays => {
  const years = Math.floor(numberOfDays/365)
  const month = Math.floor((numberOfDays%365)/30)
  const days = Math.floor((numberOfDays%365)%30)
  console.log(years + " Ano(s)")
  console.log(month + " Mes(es)")
  console.log(days + " Dia(s)")
  readline.close()
});