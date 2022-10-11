module HelloWorld

let message = "Hello He4rtoberfest"

[<EntryPoint>]
let main _ =
    message |> printfn "%s"
    0
