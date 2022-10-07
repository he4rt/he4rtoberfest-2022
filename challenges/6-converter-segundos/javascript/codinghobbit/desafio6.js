const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Insira os segundos: ", (sec) => {
  const hours = parseInt(sec / 3600);
  const minutes = parseInt((sec % 3600) / 60);
  const seconds = parseInt(sec % 60);
  console.log(
    `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`
  );
  readline.close();
});
