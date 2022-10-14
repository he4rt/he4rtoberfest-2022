module IdadeDias

open System

let validateInput (input: string) =
    match Int32.TryParse input with
    | true, x -> Some x
    | false, _ -> None

let divisionWithRemainder x y =
    (x / y, x % y)

let convertDaysToDate (input: int) =
    let years, yRem = divisionWithRemainder input 365
    let months, days = divisionWithRemainder yRem 30
    (years, months, days)
