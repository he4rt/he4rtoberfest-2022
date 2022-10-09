let args: string array = fsi.CommandLineArgs |> Array.tail

let inputDays = args.[0] |> int

let daysInAge (days: int) =
  let years = days / 365
  let monthes = (days % 365) / 30
  let daysLeft = (days % 365) % 30

  printfn "%A ano(s)" years
  printfn "%A mes(ses)" monthes
  printfn "%A dia(s)" daysLeft

daysInAge(inputDays)