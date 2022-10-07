const myArguments = process.argv.slice(2);

const total = myArguments.reduce((acc, curr) => acc + parseInt(curr), 0);

const totalCoelhos = myArguments
  .filter((item) => typeof item === "string")
  .map((item) => item.replace(" ", ""))
  .filter((item) => item.includes("C"))
  .reduce((acc, curr) => acc + parseInt(curr), 0);

const totalRatos = myArguments
  .filter((item) => typeof item === "string")
  .map((item) => item.replace(" ", ""))
  .filter((item) => item.includes("R"))
  .reduce((acc, curr) => acc + parseInt(curr), 0);

const totalSapos = myArguments
  .filter((item) => typeof item === "string")
  .map((item) => item.replace(" ", ""))
  .filter((item) => item.includes("S"))
  .reduce((acc, curr) => acc + parseInt(curr), 0);

const percentCoelhos = (totalCoelhos / (total - myArguments[0])) * 100;

const percentRatos = (totalRatos / (total - myArguments[0])) * 100;

const percentSapos = (totalSapos / (total - myArguments[0])) * 100;

console.log(`Total: ${total - myArguments[0]} cobaias`);

console.log(`Total: ${totalCoelhos} coelhos`);
console.log(`Total: ${totalRatos} ratos`);
console.log(`Total: ${totalSapos} sapos`);

console.log(`Percentual de coelhos: ${percentCoelhos.toFixed(2)} %`);
console.log(`Percentual de ratos: ${percentRatos.toFixed(2)} %`);
console.log(`Percentual de sapos: ${percentSapos.toFixed(2)} %`);
