const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Sêquencia de DNA: ", (dna) => {
  let dnaArray = dna.toUpperCase().split("");
  let dnaCounter = { A: 0, C: 0, G: 0, T: 0 };

  dnaArray.forEach((nucleotide) => {
    if (dnaCounter.hasOwnProperty(nucleotide)) dnaCounter[nucleotide]++;
    else {
      console.log("Sequência inválida!");
      readline.close();
      return;
    }
  });

  const dnaString = JSON.stringify(dnaCounter).slice(1, -1);
  console.log(dnaString);

  readline.close();
});
