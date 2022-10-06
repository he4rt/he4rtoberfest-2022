const [ arg1, arg2, arg3 ] = process.argv.slice(2);

const notCreateTriangle = (a, b, c) => (a >= b + c);
const isoscelesTriangle = (a, b, c) => (a === b || b === c);
const equilateralTriangle = (a, b, c) => (a === b && b === c);
const rightTriangle = (a, b, c) => (a * 2 === b * 2 + c * 2);
const obtuseTriangle = (a, b, c) => (a * 2 > b * 2 + c * 2);
const acuteTriangle = (a, b, c) => (a * 2 < b * 2 + c * 2);

const triangleType = (a, b, c) => {
    const hasInvalidValues = [a, b, c].some((value) => value <= 0);
    
    if (hasInvalidValues) 
        return console.log('VALORES INVALIDOS');

    const orderedPoints = [a, b, c].sort((a, b) => b - a);

    a = orderedPoints[0];
    b = orderedPoints[1];
    c = orderedPoints[2];

   
    if (notCreateTriangle(a, b, c)) console.log('NAO FORMA TRIANGULO');
    else if (rightTriangle(a, b, c)) console.log('TRIANGULO RETANGULO');
    else if (obtuseTriangle(a, b, c)) console.log('TRIANGULO OBTUSANGULO');
    else if (acuteTriangle(a, b, c)) console.log('TRIANGULO ACUTANGULO');

    if (equilateralTriangle(a, b, c)) console.log('TRIANGULO EQUILATERO');
    else if (isoscelesTriangle(a, b, c)) console.log('TRIANGULO ISOSCELES');

    return;
}

triangleType(arg1, arg2, arg3);
