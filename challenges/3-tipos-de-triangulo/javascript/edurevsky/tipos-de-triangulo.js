
const square = (a) => Math.pow(a, 2)

const TriangleTypes = {

  None: [({ a, b, c }) => a >= b + c, 'NAO FORMA TRIANGULO'],

  Right: [({ a, b, c }) => (square(a)) == (square(b) + square(c)), 'TRIANGULO RETANGULO'],

  Obtuse: [({ a, b, c }) => square(a) > (square(b) + square(c)), 'TRIANGULO OBTUSANGULO'],

  Acute: [({ a, b, c }) => square(a) < (square(b) + square(c)), 'TRIANGULO ACUTANGULO'],

  Equilateral: [({ a, b, c }) => [a, b, c].every(val => val === a), 'TRIANGULO EQUILATERO'],

  Isosceles: [({ a, b, c }) => (a == b) ? true : (a == c) ? true : (b == c), 'TRIANGULO ISOSCELES']
}

const makeTriangle = (pA, pB, pC) => {

  let [ a, b, c ] = [ pA, pB, pC ].sort((a, b) => b - a)

  return { a, b, c }
}

const triangleTypesEntries = Object.entries(TriangleTypes)

const printTriangleTypes = (triangle) => {

  for (const [_, [func, outputValue]] of triangleTypesEntries) {

    let result = func(triangle)

    if (result) {
      console.log(outputValue)
    }

    if (result && func == TriangleTypes.None[0]) {
      return
    }
  }
}

const triangle = makeTriangle(5.0, 7.0, 2.0)

printTriangleTypes(triangle)
