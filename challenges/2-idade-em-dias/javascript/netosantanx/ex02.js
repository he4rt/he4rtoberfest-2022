const totalDays = process.argv[2];

const ageCalculator = () => {
    const years = Math.floor(totalDays/ 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days = Math.floor((totalDays % 365) % 30);

    console.log(`${years} ano(s)
${months} mes(es)
${days} dia(s)`);
}
ageCalculator();