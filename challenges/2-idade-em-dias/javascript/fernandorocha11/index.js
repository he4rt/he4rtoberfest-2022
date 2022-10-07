let arguments = process.argv.slice(2);
let age = arguments[0];

function calculateAge() {
  if (isNaN(age)) {
    return console.log("A informação passada não é um Number (Número)");
} else {
    let years = Math.floor(age / 365);
    let months = Math.floor((age % 365) / 30);
    let days = Math.floor((age % 365) % 30);
    
    console.log(`${years} ano(s), ${months} mês(es), ${days} dia(as)`);
  }
}

calculateAge();
