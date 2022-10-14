open Printf

let verificar_angulos (a, b, c) =
  let sum = Float.pow b 2. +. Float.pow c 2. in
  match (a, b, c) with
  | _ when Float.pow a 2. < sum -> "TRIANGULO ACUTANGULO"
  | _ when Float.pow a 2. > sum -> "TRIANGULO OBTUSANGULO"
  | _ -> "TRIANGULO RETANGULO"

let verificar_lados (a, b, c) =
  match (a, b, c) with
  | _ when a = b && b = c -> "TRIANGULO EQUILATERO"
  | _ when a = b || b = c || a = c -> "TRIANGULO ISOSCELES"
  | _ -> "ESCALENO"

let verificar_triangulo lados =
  match lados with
  | a, b, c when a >= b +. c -> printf "NAO FORMA TRIANGULO"
  | (a, b, c) as lados' ->
      let angulo = verificar_angulos lados' in
      let lado = verificar_lados lados' in
      printf "%s\n%s\n" angulo lado

let to_tuple_float lista =
  match List.map float_of_string lista with
  | [ a; b; c ] -> (a, b, c)
  | _ -> failwith "Entrada invalida"

let () =
  match Sys.argv |> Array.to_list |> List.tl with
  | [ a; b; c ] as input ->
      input
      |> List.sort (fun x y -> compare y x)
      |> to_tuple_float |> verificar_triangulo
  | _ -> failwith "uso: ocaml main.ml A B C"