open System
open FizzBuzz

try
  let args = Environment.GetCommandLineArgs() |> Array.skip 1
  if args.Length <> 1 then
    invalidArg "Invalid amount of arguments" (nameof args)
    
  let number = Int32.Parse args[0]
  
  fizzBuzz number
  |> List.iter (printfn "%s")
  
with
  | :? FormatException ->
    printfn "Invalid numeric argument"
    exit 1
  | _ ->
    printfn "Unknown error"
    exit -1
