const getInput = () => {
  const input = process.argv[2];
  const inAge = parseInt(input.replace(/\s+/g, ''), 10);
  return inAge;
};

const calculate = () => {
  const input = getInput();
  const years = Math.floor(input / 365);
  const months = Math.floor((input % 365) / 30);
  const days = Math.floor((input % 365) % 30);
  console.log(`${years} ano(s)\n${months} mês(es)\n${days} dia(as)`);
};
calculate();
