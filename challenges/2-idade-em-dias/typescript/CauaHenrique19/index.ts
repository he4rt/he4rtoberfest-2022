import Prompt from "prompt-sync";

const prompt = Prompt();

const diasPrompt: number = parseInt(prompt("Dias: "));

const DIAS_DO_ANO = 365;
const DIAS_NO_MES = 30;

const anos = parseInt((diasPrompt / DIAS_DO_ANO).toString());
let dias = parseInt((diasPrompt % DIAS_DO_ANO).toString());
const meses = parseInt((dias / DIAS_NO_MES).toString());

dias = dias % DIAS_NO_MES;

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);
