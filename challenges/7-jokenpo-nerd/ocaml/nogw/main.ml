let vantagens = [
  ("tesoura", ["papel"; "lagarto"]);
  ("papel",   ["pedra"; "spock"]);
  ("pedra",   ["lagarto"; "tesoura"]);
  ("lagarto", ["spock"; "papel"]);
  ("spock",   ["tesoura"; "pedra"])
]

let checar j1 j2 =
  match List.assoc_opt j1 vantagens with
  | Some v -> List.exists ((=) j2) v
  | None -> failwith "Jogada invalida"

let jokenpo j1 j2 =
  match (j1, j2) with
  | (j1, j2) when j1 = j2 -> print_endline "empate"
  | (j1, j2) when checar j1 j2 -> Printf.printf "rajesh (%s) venceu\n" j1
  | (sh, j2) -> Printf.printf "sheldon (%s) venceu\n" j2

let () = 
  match Sys.argv with
  | [|_; j1; j2 |] -> jokenpo j1 j2
  | _ -> failwith "uso: ocaml main.ml JOGADA1 JOGADA2"