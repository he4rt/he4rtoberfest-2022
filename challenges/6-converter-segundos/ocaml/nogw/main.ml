open Printf

let quoc_rest x y = (x / y, x mod y)

let conversor dias =
  let minutos, resto = quoc_rest dias 60 in
  let horas, segundos = quoc_rest minutos 60 in
  printf "%.2d:%.2d:%.2d\n" horas segundos resto

let () =
  match Sys.argv with
  | [| _; x |] -> conversor (int_of_string x)
  | _ -> failwith "uso: ocaml main.ml DIAS"
