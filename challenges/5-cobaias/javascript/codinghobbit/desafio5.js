const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Insira os dados de pesquisa. Ex '10 10 C 6 R 15 S ...' ",
  (researchData) => {
    const data = researchData.split(" ").slice(1);
    const dataCounters = { total: 0, rabbits: 0, rats: 0, frogs: 0 };

    data.forEach((item, index) => {
      if (index % 2 === 0 && data[index + 1] != -1) {
        dataCounters.total += parseInt(item);
        data[index + 1].toUpperCase() === "C"
          ? (dataCounters.rabbits += parseInt(item))
          : data[index + 1].toUpperCase() === "R"
          ? (dataCounters.rats += parseInt(item))
          : data[index + 1].toUpperCase() === "S"
          ? (dataCounters.frogs += parseInt(item))
          : null;
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
