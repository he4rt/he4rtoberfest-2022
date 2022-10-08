function recebeAnosEmDia(dias: number) {
  let anosDeVida = Math.floor(dias / 365);
  let mesesDeVida = Math.floor((dias / 30) % 12);
  let diasDeVida = Math.floor((dias % 30) % 12);

  return console.log(
    `Anos: ${anosDeVida}, Meses: ${mesesDeVida}, Dias: ${diasDeVida}`
  );
}

recebeAnosEmDia(60);
