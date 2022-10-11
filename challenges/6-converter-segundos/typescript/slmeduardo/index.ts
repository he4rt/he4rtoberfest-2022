function converterSegundos(segundos: number) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos - horas * 3600) / 60);
  const segundosRestantes = segundos - horas * 3600 - minutos * 60;

  console.log(`${horas} horas, ${minutos} minutos e ${segundosRestantes} segundos.`);
}

converterSegundos(321534);
