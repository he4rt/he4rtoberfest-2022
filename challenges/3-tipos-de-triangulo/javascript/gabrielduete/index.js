const args = process.argv.slice(2)

args
  .sort(function (a, b) {
    return a - b
  })
  .reverse()

const numbers = args.map(Number)

const [A, B, C] = numbers

const validates = {
  notTriangle: A >= B + C,
  isRectangleTriangle: A ** 2 === B ** 2 + C ** 2,
  isObtusangleTriangle: A ** 2 >B ** 2 + C ** 2,
  isShortCutTriangle: A ** 2 < B ** 2+ C ** 2,
  isEquilateralTriangle: A === B && A == C && B == C,
  isIsoscelesTriangle: A === B || B === C,
}

const verify = () => {
  const {
    notTriangle,
    isRectangleTriangle,
    isObtusangleTriangle,
    isShortCutTriangle,
    isEquilateralTriangle,
    isIsoscelesTriangle,
  } = validates

  if (notTriangle) {
    return console.log("NAO FORMA TRIANGULO")
  }

  isRectangleTriangle
    ? console.log("TRIANGULO RETANGULO")
    : isObtusangleTriangle
    ? console.log("TRIANGULO OBTUSANGULO")
    : isShortCutTriangle && console.log("TRIANGULO ACUTANGULO")

  isEquilateralTriangle
    ? console.log("TRIANGULO EQUILATERO")
    : isIsoscelesTriangle && console.log("TRIANGULO ISOSCELES")
}

verify()
