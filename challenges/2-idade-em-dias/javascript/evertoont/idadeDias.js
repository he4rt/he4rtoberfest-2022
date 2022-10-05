const amountDays = parseInt(process.argv.slice(2, 3));

const years = parseInt(amountDays / 365);
const months = parseInt((amountDays % 365) / 30);
const days = (amountDays % 365) % 30;

console.log(`
${years} ano(s)
${months} mes(es)
${days} dia(s)
`);
