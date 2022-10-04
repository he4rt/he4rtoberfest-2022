// Receive a age and return days, years and months

function ageInDays(age: number): string {
  const days = age * 365;
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  console.log(
    `${years} ano(s)
${months % 12} mes(es)
${days % 30} dia(s)`
  );

  return `${years} ano(s) ${months % 12} mes(es) ${days % 30} dia(s)`;
}

ageInDays(18);