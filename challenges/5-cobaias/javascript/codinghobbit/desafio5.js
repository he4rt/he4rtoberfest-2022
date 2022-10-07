const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Insira os dados de pesquisa. Ex '10 10 C 6 R 15 S ...' ",
  (researchData) => {
    const totalInputTests = researchData.split(" ")[0];
    const data = researchData.split(" ").slice(1);
    if (data.length !== totalInputTests * 2) {
      console.log("Insira a quantidade correta de dados");
      readline.close();
      return
    }
    const dataCounters = { total: 0, rabbits: 0, rats: 0, frogs: 0 };

    data.forEach((item, index) => {
      const animal = data[index + 1];
      if (index % 2 === 0) {
        if(animal.toUpperCase() === 'C' || animal.toUpperCase() === 'R'|| animal.toUpperCase() === 'S'){
          dataCounters.total += parseInt(item);
          animal.toUpperCase() === "C"
          ? (dataCounters.rabbits += parseInt(item))
          : animal.toUpperCase() === "R"
          ? (dataCounters.rats += parseInt(item))
          : animal.toUpperCase() === "S"
          ? (dataCounters.frogs += parseInt(item))
          : null;
        }
      }
    });
    console.log(`
    Total: ${dataCounters.total} cobaias
    Total de coelhos: ${dataCounters.rabbits}
    Total de ratos: ${dataCounters.rats}
    Total de sapos: ${dataCounters.frogs}
    Percentual de coelhos: ${(
      (dataCounters.rabbits / dataCounters.total) *
      100
    ).toFixed(2)}%
    Percentual de ratos: ${(
      (dataCounters.rats / dataCounters.total) *
      100
    ).toFixed(2)}%
    Percentual de sapos: ${(
      (dataCounters.frogs / dataCounters.total) *
      100
    ).toFixed(2)}%`);

    readline.close();
  }
);
