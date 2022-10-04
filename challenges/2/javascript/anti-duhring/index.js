const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
rl.question('Digite sua idade em dias: ', (ageInDays) => {
    const yearInDays = 365
    const monthInDays = 30

    // The years correspond to ageInDays divided by 365
    const years = Math.floor(ageInDays / yearInDays)
    // Months correspond to the remainder of "year" divided by 30
    const months = Math.floor(ageInDays % yearInDays / monthInDays)
    // Days correspond to the remainder of "year" and "month"
    const days = Math.floor(ageInDays % yearInDays % monthInDays)

    console.log(`${years} ${years > 1 ? 'anos' : 'ano'}`)
    console.log(`${months} ${months > 1 ? 'meses' : 'mês'}`)
    console.log(`${days} ${days > 1 ? 'dias' : 'dia'}`)
});
  