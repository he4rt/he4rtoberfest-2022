import Prompt from "prompt-sync";

const prompt = Prompt();

const aPrompt: number = parseFloat(prompt("A: "));
const bPrompt: number = parseFloat(prompt("B: "));
const cPrompt: number = parseFloat(prompt("C: "));

const [a, b, c] = [aPrompt, bPrompt, cPrompt].sort((a, b) => b - a);

const aPower = Math.pow(a, 2);
const bPower = Math.pow(b, 2);
const cPower = Math.pow(c, 2);

if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
} else if (aPower === bPower + cPower) {
  console.log("TRIANGULO RETANGULO");
} else if (aPower > bPower + cPower) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (aPower < bPower + cPower) {
  console.log("TRIANGULO ACUTANGULO");
}

if (a === b && a === c && b === c) {
  console.log("TRIANGULO EQUILATERO");
} else if (a === b || a === c || b === c) {
  console.log("TRIANGULO ISOSCELES");
}
