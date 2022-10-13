let produto x y =
  let x_int = int_of_string x in
  let y_int = int_of_string y in
  Printf.printf "produto: %d\n" (x_int * y_int)

let () =
  match Sys.argv with
  | [| _; x; y |] -> produto x y
  | _ -> failwith "uso: ocaml main.ml NUMERO1 NUMERO2"
