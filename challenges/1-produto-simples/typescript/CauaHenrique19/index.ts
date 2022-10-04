import Prompt from "prompt-sync";

const prompt = Prompt();

const primeiro: number = parseInt(prompt("Primeiro Inteiro: "));
const segundo: number = parseInt(prompt("Segundo Inteiro: "));

const PROD = primeiro * segundo;
console.log(`produto: ${PROD}`);
