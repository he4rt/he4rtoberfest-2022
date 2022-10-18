const prefix = '[he4rtoberfest]';
const sideA = process.argv[2];
const sideB = process.argv[3];
const sideC = process.argv[4];

if(!sideA || !sideB || !sideC) throwInvalidArgumentError();
if(isNaN(parseFloat(sideA))) throwInvalidNumberError(sideA);
if(isNaN(parseFloat(sideB))) throwInvalidNumberError(sideB);
if(isNaN(parseFloat(sideC))) throwInvalidNumberError(sideC);

getTriangleType(Number(sideA), Number(sideB), Number(sideC));

function throwInvalidNumberError(arg: string) {
  console.log(`${prefix} O argumento "${arg}" não é um número válido.`);
  process.exit(1);
}

function throwInvalidArgumentError() {
  console.log(`${prefix} Por favor, informe 2 números válidos.`);
  process.exit(1);
}

function getTriangleType(sideA: number, sideB: number, sideC: number) {
  const lgSide = Math.max(sideA, sideB, sideC);
  const smSide = Math.min(sideA, sideB, sideC);
  const mdSide = (sideA + sideB + sideC) - lgSide - smSide;

  const lgSide2 = Math.pow(lgSide, 2);
  const mdSide2 = Math.pow(mdSide, 2);
  const smSide2 = Math.pow(smSide, 2);

  if(lgSide >= (mdSide+smSide)) console.log(`${prefix} NAO FORMA TRIANGULO`);
  else {
    if(lgSide2 === (mdSide2 + smSide2)) console.log(`${prefix} TRIANGULO RETANGULO`);
    else if(lgSide2 > (mdSide2 + smSide2)) console.log(`${prefix} TRIANGULO OBTUSANGULO`);
    else if(lgSide2 < (mdSide2 + smSide2)) console.log(`${prefix} TRIANGULO ACUTANGULO`);

    if(lgSide === mdSide && mdSide === smSide) console.log(`${prefix} TRIANDULO EQUILATERO`);
    else if(lgSide === mdSide || mdSide === smSide || lgSide === smSide) console.log(`${prefix} TRIANGULO ISOSCELES`);
  }
  
  process.exit(0);
}