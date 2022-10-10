const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Sêquencia de DNA: ", (dna) => {
  const dnaArray = dna.toUpperCase().split("");
  const dnaCounter = { A: 0, C: 0, G: 0, T: 0 };
  let invalidSeq = false;

  dnaArray.forEach((nucleotide) => {
    if (dnaCounter.hasOwnProperty(nucleotide)) {
      dnaCounter[nucleotide]++;
      return;
    }
    invalidSeq = true;
    return;
  });

  const dnaString = JSON.stringify(dnaCounter).slice(1, -1);
  console.log(!invalidSeq ? dnaString : "Sequência inválida!");

  readline.close();
});
