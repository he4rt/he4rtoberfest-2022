open Printf

let quoc_resto x y = (x / y, x mod y)

let idade_em_dias dias =
  let anos, resto = quoc_resto dias 365 in
  let meses, dias = quoc_resto resto 30 in
  printf "%d ano(s)\n" anos;
  printf "%d mes(es)\n" meses;
  printf "%d dia(s)\n" dias

let () =
  match Sys.argv with
  | [| _; x |] -> idade_em_dias (int_of_string x)
  | _ -> failwith "uso: ocaml main.ml DIAS"
