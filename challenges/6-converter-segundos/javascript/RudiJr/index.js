const myArgs = parseInt(process.argv.slice(2, 4));

const hr = Math.floor(myArgs / 3600);
const min = Math.floor((myArgs - hr * 3600) / 60);
const sec = myArgs - hr * 3600 - min * 60;

const convertSecond = (time) => {
  return time < 10 ? `0${time}` : time;
};

console.log(`
  ${convertSecond(hr)} Hora(s)
  ${convertSecond(min)} Minuto(s)
  ${convertSecond(sec)} Segundo(s)
  --------------------------------
  Horário: ${convertSecond(hr)}:${convertSecond(min)}:${convertSecond(sec)}
  `);