function calculateAgeByDays(totalDays) {
  const FULL_YEAR = 365;
  const FULL_MONTH = 30;
  let years = 0;
  let months = 0;
  let days = 0;

  years = Math.floor(totalDays/FULL_YEAR);
  months = Math.floor((totalDays % FULL_YEAR) / FULL_MONTH);
  ((totalDays % FULL_YEAR) / FULL_MONTH) / months !== 1 ? days = Math.floor(totalDays % FULL_YEAR - (months * FULL_MONTH)) : days = 0;

  const result = `
    ${years} ano(s)
    ${months} mes(es)
    ${days} dia(s)
  `

  return result;
}

console.log(calculateAgeByDays(3000));