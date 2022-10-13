module FizzBuzz

let (|Fizz|_|) number =
  if number % 3 = 0 then Some ()
  else None

let (|Buzz|_|) number =
  if number % 5 = 0 then Some ()
  else None
  
let fizzBuzz number =
  [ for i in 1..number do
      match i with
      | Fizz & Buzz -> "FizzBuzz"
      | Fizz -> "Fizz"
      | Buzz -> "Buzz"
      | _ -> string i ]
