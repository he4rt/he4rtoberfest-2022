let rec fizzbuzz n =
  match n with
  | n when n mod 3 = 0 && n mod 5 = 0 -> print_endline "fizzbuzz"
  | n when n mod 3 = 0 -> print_endline "fizz"
  | n when n mod 5 = 0 -> print_endline "buzz"
  | n -> print_endline (string_of_int n)

let () =
  match Sys.argv with
  | [| _; n |] ->
      let n_int = int_of_string n in
      let count = List.init n_int succ in
      List.iter fizzbuzz count
  | _ -> failwith "uso: ocaml main.ml NUMERO"