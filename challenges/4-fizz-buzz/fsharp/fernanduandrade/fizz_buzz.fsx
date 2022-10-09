let args: string array = fsi.CommandLineArgs |> Array.tail

let input = args.[0] |> int

let fizzBuzz (value: int) =
  for i in 1 .. value do
    match i with
    | i when (i % 5) = 0 && (i % 3) = 0 -> printfn "FizzBuzz"
    | i when (i % 5) = 0 -> printfn "Buzz"
    | i when (i % 3) = 0 -> printfn "Fizz"
    | _ -> printfn "%A" i

fizzBuzz(input)