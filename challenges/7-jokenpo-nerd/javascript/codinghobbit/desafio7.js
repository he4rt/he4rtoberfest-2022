function jokenpo(player1, player2) {
  return player1 == player2
    ? "empate"
    : (player1 == "tesoura" && (player2 == "papel" || player2 == "lagarto")) ||
      (player1 == "papel" && (player2 == "pedra" || player2 == "spock")) ||
      (player1 == "pedra" && (player2 == "tesoura" || player2 == "lagarto")) ||
      (player1 == "lagarto" && (player2 == "spock" || player2 == "papel")) ||
      (player1 == "spock" && (player2 == "tesoura" || player2 == "pedra"))
    ? "rajesh"
    : "sheldon";
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Jogue, Ex. 3 spock pedra tesoura tesoura papel lagarto: ",
  (moves) => {
    const totalMoves = moves.split(" ")[0]
    const playersMoves = moves.split(" ").splice(1);
    if (totalMoves != playersMoves.length/2){
      console.log("Digite a quantidade correta de jogos.")
      readline.close()
      return 
    }
    playersMoves.forEach((move, player) => {
      if (player % 2 === 0)
        console.log(jokenpo(move.toLowerCase(), playersMoves[player + 1].toLocaleLowerCase()));
    });

    readline.close();
  }
);
