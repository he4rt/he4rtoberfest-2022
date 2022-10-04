const myArgs = process.argv.slice(2);

const ageInDays = (age) => {
  const perYear = Math.floor(age / 365);
  const perMonth = Math.floor((age % 365) / 30);
  const perDay = Math.floor((age % 365) % 30);
  return `${perYear} ano(s)
${perMonth} mes(es)
${perDay} dia(s)`;
};

console.log(ageInDays(myArgs[0]));
