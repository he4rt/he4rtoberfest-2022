const readline = require("readline");

function getNucleotidios(input = "") {
  let a = 0;let c = 0;let t = 0;let g = 0;

  const dna = input.toUpperCase();

  for (i in dna) {
    if (dna[i] !== "A" && dna[i] !== "C" && dna[i] !== "T" && dna[i] !== "G") {
      console.log("invalid input");
      return;
    }

    if(dna[i] === 'A') a++;
    if(dna[i] === 'C') c++;
    if(dna[i] === 'T') t++;
    if(dna[i] === 'G') g++;
  }

  console.log(`A: ${a}, C: ${c}, T: ${t}, G: ${g}`);
}

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("DNA:", (dna) => {
  getNucleotidios(dna);
  input.close();
});
