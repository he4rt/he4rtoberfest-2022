const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Idade em dias: ", age => {
  if (!Number(age)) {
    console.log("Idade inválida");
    return readline.close();
  }

  console.log(`
      ${Math.floor(age / 365)} ano(s)\t
      ${Math.floor((age % 365) / 30)} mes(s)\t
      ${(age % 365) % 30} dia(s)\t
    `);
  readline.close();
});
