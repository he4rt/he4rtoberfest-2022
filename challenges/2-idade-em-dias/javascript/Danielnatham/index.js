const totalDays = parseInt(process.argv.slice(2, 3));

const years = (totalDays / 365).toFixed(0);
const months = ((totalDays % 365) / 30).toFixed(0);
const days = ((totalDays % 365) % 30).toFixed(0);

console.log(years + ' anos(s)')
console.log(months + ' mes(es)')
console.log(days + ' dia(s)')
