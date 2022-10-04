function ageInDays(age: number) {
  const years = Math.floor(age / 365);
  const months = Math.floor((age % 365) / 30);
  const days = Math.floor((age % 365) % 30);

  console.log(
    `${years} ano(s)
    ${months} mes(es)
    ${days} dia(s)`
  );
}

ageInDays(400);