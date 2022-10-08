const arg = process.argv.splice(2)

const number = parseInt(arg)

const validate = number => {
  const Fizz = number % 3 === 0
  const Buzz = number % 5 === 0

  const isFizzBuzz = Fizz && Buzz

  const arrayValidations = Object.entries({ isFizzBuzz, Fizz, Buzz })

  const filtered = arrayValidations.filter(([_, value]) => value === true)

  const wayOut = filtered.length

  if (wayOut === 3) {
    return "FizzBuzz"
  }

  return wayOut !== 0 ? filtered[0][0] : number
}

const showResult = () => {
  Array.from({ length: number }, (_, i) => i + 1)
    .map((number) => validate(number))
    .forEach((element) => console.log(element))
}

showResult()
