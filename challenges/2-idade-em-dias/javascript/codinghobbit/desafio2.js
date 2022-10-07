const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Insira idade em dias: ", (age) => {
  const ageAsNumber = Number(age);
  const ageInYears = parseInt(ageAsNumber / 365);
  const ageInMonths = parseInt((ageAsNumber % 365) / 30);
  const ageInDays = parseInt((ageAsNumber % 365) % 30);
  console.log(`
    ${ageInYears} ${ageInYears > 1 ? "anos" : "ano"}
    ${ageInMonths} ${ageInMonths > 1 ? "meses" : "mês"}
    ${ageInDays} ${ageInDays > 1 ? "dias" : "dia"}`);
  readline.close();
});
