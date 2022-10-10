let args: string array = fsi.CommandLineArgs |> Array.tail

let firstArgs = args.[0] |> int
let secondArgs = args.[1] |> int

printfn "produto: %A" (firstArgs * secondArgs) 