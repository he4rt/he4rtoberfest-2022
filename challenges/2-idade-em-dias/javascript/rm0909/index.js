const [, , input] = process.argv;

const checkAge = (num) => {
  const years = parseInt(num / 365);
  const months = parseInt((num % 365) / 30);
  const days = parseInt((num % 365) % 30);
  console.log(`${years} ano(s)
${months} mês(es)
${days} dia(s)`  );
};
checkAge(input);
