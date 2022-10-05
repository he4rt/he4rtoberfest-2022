const daysAlive = 8000

const years = Math.floor(daysAlive / 365);
const months = (Math.floor(daysAlive / 30)) % 12;
const days = (daysAlive % 365) % 30;

console.log(`
${years} ano(os)
${months} mes(es)
${days} dia(s)
`);
