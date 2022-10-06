const myArgument = process.argv.slice(2);

const numberOfCases = myArgument[0];

const tests = Array.from({ length: numberOfCases }, (_, i) => {
  const [player1, player2] = myArgument[i].split(" ");
  return [player1, player2];
});
const results = [];

for (let i = 0; i < numberOfCases; i++) {
  const test = tests[i];

  const player1 = test[0];
  const player2 = test[1];

  if (player1 === player2) {
    results.push("empate");
  } else if (player1 === "tesoura" && player2 === "papel") {
    results.push("rajesh");
  } else if (player1 === "papel" && player2 === "pedra") {
    results.push("rajesh");
  } else if (player1 === "pedra" && player2 === "lagarto") {
    results.push("rajesh");
  } else if (player1 === "lagarto" && player2 === "spock") {
    results.push("rajesh");
  } else if (player1 === "spock" && player2 === "tesoura") {
    results.push("rajesh");
  } else if (player1 === "tesoura" && player2 === "lagarto") {
    results.push("rajesh");
  } else if (player1 === "lagarto" && player2 === "papel") {
    results.push("rajesh");
  } else if (player1 === "papel" && player2 === "spock") {
    results.push("rajesh");
  } else if (player1 === "spock" && player2 === "pedra") {
    results.push("rajesh");
  } else if (player1 === "pedra" && player2 === "tesoura") {
    results.push("rajesh");
  } else {
    results.push("sheldon");
  }
}

console.log(results.toString().replace(/,/g, ""));
