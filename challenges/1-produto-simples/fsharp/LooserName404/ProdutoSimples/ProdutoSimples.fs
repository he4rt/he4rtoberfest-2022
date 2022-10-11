module ProdutoSimples
open System

let (|ValidArgumentAmount|_|) (input: string array) =
    match input with
    | [|_; x; y|] -> Some (x, y)
    | _ -> None

let (|ValidInput|_|) (input: string) =
    match Int32.TryParse input with
    | true, num -> Some num
    | _ -> None

let product num1 num2 =
    num1 * num2
