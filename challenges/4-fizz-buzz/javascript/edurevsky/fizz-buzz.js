
const x = process.argv[2]

Array.from({ length: x }, (_, i) => i + 1)
  .map(number => 
    number % 5 == 0 && number % 3 == 0 ? 'FizzBuzz' 
      : number % 5 == 0 ? 'Buzz' 
      : number % 3 == 0 ? 'Fizz' 
      : number
  )
  .forEach(element => console.log(element))
