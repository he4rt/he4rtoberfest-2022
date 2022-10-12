open System
open IdadeDias

let args = Environment.GetCommandLineArgs() |> Array.skip 1

if args.Length <> 1 then
  printfn "Invalid amount of arguments"
  exit 1

match validateInput args[0] with
| Some x ->
  let years, months, days = convertDaysToDate x
  printfn $"{years} ano(s)\n{months} mes(es)\n{days} dia(s)"
| _ ->
  printfn ""
  exit 1
