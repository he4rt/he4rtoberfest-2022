type nucleotidios = { a : int; c : int; g : int; t : int }

let nucleotidios = { a = 0; c = 0; g = 0; t = 0 }

let nucleotidios_to_string n =
  Printf.sprintf "A: %d, C: %d, G: %d, T: %d" n.a n.c n.g n.t

let list_to_string s = 
  List.init (String.length s) (String.get s)

let add_nucleotidios n ns =
  match n with
  | 'A' -> { ns with a = ns.a + 1 }
  | 'C' -> { ns with c = ns.c + 1 }
  | 'G' -> { ns with g = ns.g + 1 }
  | 'T' -> { ns with t = ns.t + 1 }
  | _ -> failwith "Sequência de DNA inválida"

let () =
  match Sys.argv with
  | [| _; ns |] ->
    ns
    |> list_to_string
    |> List.fold_left (fun acc c -> add_nucleotidios c acc) nucleotidios
    |> nucleotidios_to_string 
    |> print_endline
  | _ -> failwith "uso: ocaml main.ml NUCLEOTIDIO"