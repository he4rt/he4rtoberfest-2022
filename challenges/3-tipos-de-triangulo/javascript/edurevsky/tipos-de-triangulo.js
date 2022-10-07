
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

      if (func == TriangleTypes.None[0]) {
        return
      }
  
      if (func == TriangleTypes.Equilateral[0]) {
        return
      }
    }
  }
}

const point1 = process.argv[2]
const point2 = process.argv[3]
const point3 = process.argv[4]

const triangle = makeTriangle(point1, point2, point3)

printTriangleTypes(triangle)
