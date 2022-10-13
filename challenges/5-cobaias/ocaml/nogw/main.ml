let ler_arquivo arq =
  let ic = open_in arq in
  let ler_linha () = try Some (input_line ic) with End_of_file -> None in
  let rec aux acc =
    match ler_linha () with
    | Some s -> aux (s :: acc)
    | None -> close_in ic; List.rev acc
  in aux []

let separar data =
  match String.split_on_char ' ' data with
  | [ quant; letra ] -> (quant, letra)
  | _ -> failwith "Entrada invalida"

let obter_letra data =
  let _, letra = separar data in
  letra

let obter_quant data =
  let quant, _ = separar data in
  int_of_string quant

let calcular_total data =
  data 
  |> List.map obter_quant 
  |> List.fold_left (fun acc q -> acc + q) 0

let calcular_porcentagem quant_total quant_animal =
  let qtf = float_of_int quant_total 
  and qaf = float_of_int quant_animal in
  (qaf *. 100.) /. qtf

let total_animal letra data =
  data 
  |> List.filter (fun l -> obter_letra l = letra) 
  |> calcular_total

let calcular_cobaias data =
  let total = data |> List.tl in
  let quant = calcular_total(total) in
  
  let quant_coelhos = total_animal "C" total in
  let quant_ratos = total_animal "R" total in
  let quant_sapos = total_animal "S" total in

  let prcnt_coelhos = calcular_porcentagem quant quant_coelhos
  and prcnt_ratos = calcular_porcentagem quant quant_ratos
  and prcnt_sapos = calcular_porcentagem quant quant_sapos in

  Printf.printf 
    "Total: %d cobais\nTotal de coelhos: %d\nTotal de ratos: %d\nTotal de sapos: %d\nPercentual de coelhos: %.2f\nPercentual de ratos: %.2f\nPercentual de sapos: %.2f\n"
    quant 
    quant_coelhos 
    quant_ratos 
    quant_sapos 
    prcnt_coelhos 
    prcnt_ratos 
    prcnt_sapos

let () = 
  ler_arquivo "input.txt" 
  |> calcular_cobaias