module TiposTriangulo

open System

type Triangle = float * float * float
type TriangleType =
  | Right
  | Obtuse
  | Acute
  | Equilateral
  | Isosceles

let triangleTypeName = function
  | Right -> "TRIANGULO RETANGULO"
  | Obtuse -> "TRIANGULO OBTUSANGULO"
  | Acute -> "TRIANGULO ACUTANGULO"
  | Equilateral -> "TRIANGULO EQUILATERO"
  | Isosceles -> "TRIANGULO ISOSCELES"

type TriangleSides = float list
type CLIInput = string list

type ValidationError =
  | InvalidArgumentAmount
  | InvalidInput

let getValidationErrorMessage error =
  match error with
  | InvalidArgumentAmount -> "Invalid amount of arguments passed to the program"
  | InvalidInput -> "Invalid decimal number input"

let readInput () : CLIInput =
  Environment.GetCommandLineArgs()
  |> Seq.skip 1
  |> Seq.toList

let validateParameterAmount (input: CLIInput) =
  if input.Length <> 3 then
    Error InvalidArgumentAmount
  else
    Ok input

let convertInputToFloat (input: CLIInput) : Result<TriangleSides, ValidationError> =
  let converted =
    input
    |> List.choose (fun i ->
      match Double.TryParse i with
      | true, x -> Some x
      | false, _ -> None)
    
  if converted.Length <> 3 then
    Error InvalidInput
  else
    Ok converted

let createTriangle (sides: TriangleSides) : Triangle =
  let sorted = List.sortDescending sides
  sorted[0], sorted[1], sorted[2]
  
let getTriangleTypes (triangle: Triangle) : TriangleType list option =
  let a, b, c = triangle
  
  let equilateral = a = b && a = c && b = c
  let isosceles = not equilateral && (a = b || a = c || b = c)
  
  let withEquilateralOrIsosceles (type': TriangleType) =
    Some
      [ type'
        if equilateral then Equilateral
        if isosceles then Isosceles ]
      
  if a >= (b + c) then
    None
  else
    match (a ** 2), (b ** 2), (c ** 2) with
    | a, b, c when a = (b + c) -> Right |> withEquilateralOrIsosceles
    | a, b, c when a > (b + c) -> Obtuse |> withEquilateralOrIsosceles
    | _ -> Acute |> withEquilateralOrIsosceles

let joinStrings separator (strings: string list) =
  String.Join(separator, strings)

let getTypesNames (types: TriangleType list option) =
  match types with
  | Some types ->
    types
    |> List.map triangleTypeName
    |> joinStrings "\n"
  | None -> "NAO FORMA TRIANGULO"

let execute =
  readInput
  >> validateParameterAmount
  >> Result.bind convertInputToFloat
  >> Result.map createTriangle
  >> Result.map getTriangleTypes
  >> Result.map getTypesNames
  >> Result.map (printfn "%s")
  >> Result.mapError getValidationErrorMessage
  >> Result.mapError (fun e ->
    printfn "%s" e
    exit 1)
  >> ignore