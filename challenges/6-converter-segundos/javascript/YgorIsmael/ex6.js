// =D
const tempo = process.argv[2];
function conversao(valor){
    horas = Math.floor(valor/3600).toString().padStart(2, '0');;
    minutos = Math.floor((valor%3600)/60).toString().padStart(2, '0');;
    segundos = Math.floor((valor%3600)%60).toString().padStart(2, '0');;
console.log(`${horas} hora(s) ${minutos} minuto(s) ${segundos} segundo(s)`);
}
conversao(tempo);