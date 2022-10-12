open System
open ProdutoSimples

let argv = Environment.GetCommandLineArgs()

let num1, num2 =
    match argv with
    | ValidArgumentAmount (x, y) -> x, y
    | _ ->
        printfn "Invalid number of arguments"
        exit 1

match num1, num2 with
| ValidInput x, ValidInput y -> 
    let result = product x y
    printfn "%d" result
| _ ->
    printfn "Invalid input"
    exit 1
