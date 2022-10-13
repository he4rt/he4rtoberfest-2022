// Resolvi essa questão de forma funcional, usei currying e closures que aprendi durante o curso.

const inputs = process.argv.slice(2);
// Armazena os valores do input e ordena de forma decrescente.
const ordenaValores = [...inputs].sort((x, y) => y - x);

// Retorna true ou false.
const representaTriangulo = (a) => (b) => (c) => {
    if (a < b + c) {
      return true;
    } else {
      return false;
    }
  };
  
  
  // Armazena true ou false.
  const resultado = representaTriangulo(ordenaValores[0])(ordenaValores[1])(ordenaValores[2]);
  
  // Constantes que representam o ângulo do triângulo.
  const ret = "RETANGULO";
  const obt = "OBTUSANGULO";
  const act = "ACUTANGULO";
  
  
  // Recebe o resultado true ou false da função representaTriangulo e recebe os 
  // três lados do triângulo ordenado de forma decrescente.
  const displayResult = (result, ladoA, ladoB, ladoC) => {
      if (result == true) {
          if (ladoA == ladoB && ladoB == ladoC) {
              if(ladoA ** 2 == ladoB ** 2 + ladoC ** 2) {
                  return `TRIANGULO ${ret}\nTRIANGULO EQUILATERO`;
              } else if (ladoA ** 2 > ladoB ** 2 + ladoC ** 2) {
                  return `TRIANGULO ${obt}\nTRIANGULO EQUILATERO`;
              } else if (ladoA ** 2 < ladoB ** 2 + ladoC ** 2) {
                  return `TRIANGULO ${act}\nTRIANGULO EQUILATERO`;
              }
                  
          } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
              if(ladoA ** 2 == ladoB ** 2 + ladoC ** 2) {
                  return `TRIANGULO ${ret}\nTRIANGULO ISOSCELES`;
              } else if (ladoA ** 2 > ladoB ** 2 + ladoC ** 2) {
                  return `TRIANGULO ${obt}\nTRIANGULO ISOSCELES`;
              } else if (ladoA ** 2 < ladoB ** 2 + ladoC ** 2) {
                  return `TRIANGULO ${act}\nTRIANGULO ISOSCELES`;
              }
          } 
      } else {
          return `NAO FORMA TRIANGULO`;
      }
  }
  
  console.log(`Entrada: ${ordenaValores[0]} ${ordenaValores[1]} ${ordenaValores[2]}\n`)

  // Passamos os respectivos argumentos.
  console.log(displayResult(resultado, ordenaValores[0], ordenaValores[1], ordenaValores[2]));
  