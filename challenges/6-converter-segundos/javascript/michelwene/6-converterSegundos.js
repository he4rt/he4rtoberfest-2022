const myArguments = process.argv.slice(2);

const converterSeconds = (seconds) => {
  const hours = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secondsLeft = (seconds % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${secondsLeft}`;
};

console.log(converterSeconds(myArguments[0]));
