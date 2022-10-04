
const firstProductArgv = process.argv[2]
const secondProductArgv = process.argv[3]

const someIsNaN = isNaN(firstProductArgv) || isNaN(secondProductArgv)

if (someIsNaN) {
  process.exit(1)
}

const firstProduct = parseInt(firstProductArgv)
const secondProduct = parseInt(secondProductArgv)

const PROD = firstProduct * secondProduct

console.log(`produto: ${PROD}`);
