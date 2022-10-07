open System

let args: string array = fsi.CommandLineArgs |> Array.tail

let input = args.[0] |> int

let minDate = DateTime.MinValue
let date = minDate.AddSeconds(input)
printfn "%A" (date.ToString("HH:mm:ss"))
