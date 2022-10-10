const inputDays = process.argv[2]

let years = 0;
let months = 0;
let days = 0;

if (inputDays >= 365) {
    years = Math.floor((inputDays / 365));
}

const restDaysToMonth = inputDays % 365;

if (restDaysToMonth >= 30) {
    months = Math.floor((restDaysToMonth / 30))
}

days = (restDaysToMonth % 365) % 30

console.log(`${years} ano(s)`); 
console.log(`${months} mes(es)`); 
console.log(`${days} dia(s)`); 
