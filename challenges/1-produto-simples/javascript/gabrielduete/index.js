const getValues = () => {
  // Recebendo argumentos(arvs) passados pelo processo do node.js
  const values = process.argv

  // Retirando o primeiro e segundo elemento do array
  values.splice(0,2)

  // Desestruturando os valores do array
  const [N1, N2] = values

  return { N1, N2 }
}

const calc = () => {
  // Desestruturando valores retornados pela função
  const { N1, N2 } = getValues()
  
  // Multiplicando valores
  const PROD = N1 * N2

  // Retornando resultado no terminal
  console.log(`produto: ${PROD}`)
}

calc()