const args = parseInt(process.argv.slice(2, 3));

const hours = Math.floor(args / 3600);
const minutes = Math.floor((args - hours * 3600) / 60);

const seconds = args - hours * 3600 - minutes * 60;

const formatString = (value) => {
  return value < 10 ? `0${value}` : value;
};

console.log(
  `${formatString(hours)}:${formatString(minutes)}:${formatString(seconds)}`
);