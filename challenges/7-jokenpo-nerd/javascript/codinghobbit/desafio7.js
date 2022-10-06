function jokenpo(player1, player2) {
  return (player1 == player2
    ? "emapte"
    : player1 == "tesoura" && player2 == "papel") ||
    (player1 == "tesoura" && player2 == "lagarto") ||
    (player1 == "papel" && player2 == "pedra") ||
    (player1 == "papel" && player2 == "spock") ||
    (player1 == "pedra" && player2 == "tesoura") ||
    (player1 == "pedra" && player2 == "lagarto") ||
    (player1 == "lagarto" && player2 == "spock") ||
    (player1 == "lagarto" && player2 == "papel") ||
    (player1 == "spock" && player2 == "tesoura") ||
    (player1 == "spock" && player2 == "pedra")
    ? "player1"
    : "player2";
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Jogue, Ex. 3 spock pedra tesoura tesoura papel lagarto: ",
  (moves) => {
    const playersMoves = moves.split(" ").splice(1);
    playersMoves.forEach((move, player) => {
      if (player % 2 === 0) {
        const gameResult = jokenpo(move, playersMoves[player + 1]);
        gameResult === "player1"
          ? console.log("rajesh")
          : gameResult === "player2"
          ? console.log("sheldon")
          : console.log("empate");
      }
    });

    readline.close();
  }
);
