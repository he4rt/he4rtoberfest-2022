// =D
const tempo = process.argv[2];
function conversao(valor){
    let horas = Math.floor(valor/3600).toString().padStart(2, '0');
    let minutos = Math.floor((valor%3600)/60).toString().padStart(2, '0');
    let segundos = Math.floor((valor%3600)%60).toString().padStart(2, '0');
return(`${horas}:${minutos}:${segundos}`);
}
console.log(conversao(tempo));
