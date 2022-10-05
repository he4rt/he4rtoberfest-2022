let ladoA = parseFloat(process.argv[2]);
let ladoB = parseFloat(process.argv[3]);
let ladoC = parseFloat(process.argv[4]);

function tipoTriangulo(A, B, C)
{
  if (A < 0 || B < 0 || C < 0)
  {
    console.log('VALOR NÃO PODE SER MENOR QUE 0');
  }
  else if (A >= (B + C)) 
  {
    console.log('NAO FORMA TRIANGULO');
  } else if (A**2 < B**2 + C**2)
    {
      console.log('TRIANGULO ACUTANGULO');
    } 
    if(A == B && B == C && C == A)
    {
      console.log('TRIANGULO EQUILATERO');
    } if (A**2 == B**2 + C**2) 
    {
      console.log('TRIANGULO RETANGULO');
    } if (A**2 > B**2 + C**2)
    {
      console.log('TRIANGULO OBTUSANGULO');
    } if ((A == B && B != C) || (A == C && C != B) || (C == B && B != A))
    {
      console.log('TRIANGULO ISOSCELES');
    }
}

tipoTriangulo(ladoA, ladoB, ladoC);