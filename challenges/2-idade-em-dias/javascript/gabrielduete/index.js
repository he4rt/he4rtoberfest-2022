const getYears = () => {
  let ageDays = process.argv[2]

  const years = parseInt(ageDays / 365)
  ageDays = ageDays % 365

  return { years, ageDays }
}

const getMonths = () => {

  let { ageDays } = getYears()

  const months = parseInt(ageDays / 30)
  ageDays = ageDays % 30

  return { months, ageDays }
}

const showResult = () => {

  const { years } = getYears()
  const { months, ageDays } = getMonths()

  console.log(years + " ano(s)")
  console.log(months + " mes(es)")
  console.log(ageDays + " dia(s)")
}

showResult()
