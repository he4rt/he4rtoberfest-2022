const INPUT = 100;
const list: number[] = Array.from({ length: INPUT }, (_, i) => i + 1);

type Fizz = (n: number) => 'Fizz' | ''
const fizz: Fizz = (n: number) => n % 3 === 0 ? 'Fizz' : '';

type Buzz = (n: number) => 'Buzz' | ''
const buzz = (n: number) => n % 5 === 0 ? 'Buzz' : '';


const fizzBuzzSolver =
  (number: number) => `${ fizz(number) }${ buzz(number) }` || number;

list.forEach((number) => console.log(fizzBuzzSolver(number)));
