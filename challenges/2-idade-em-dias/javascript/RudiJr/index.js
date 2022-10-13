// years / 365
// months (%365) / 30
// days (% 365) % 30


let age = process.argv[2];

const years = parseInt(age / 365)  
const months = parseInt((age % 365) / 30);
const days = (age % 365) % 30;

console.log(`
${years} ano(s)
${months} mes(es) 
${days} dia(s)
`);