use std::{collections::HashMap, io::stdin};

fn main() {
    let mut nucleotidios = HashMap::new();
    nucleotidios.insert('A', 0);
    nucleotidios.insert('C', 0);
    nucleotidios.insert('G', 0);
    nucleotidios.insert('T', 0);

    let mut buffer = String::new();
    stdin()
        .read_line(&mut buffer)
        .expect("Não foi possível ler o input");

    for nucleotidio in buffer.trim().chars() {
        if !nucleotidios.contains_key(&nucleotidio) {
            println!("Sequência de DNA inválida");
            return;
        }

        nucleotidios.insert(nucleotidio, *nucleotidios.get(&nucleotidio).unwrap() + 1);
    }

    let mut resultado = String::new();

    for value in nucleotidios.values() {
        resultado.push_str(format!("{} ", *value).as_str());
    }

    println!("{}", resultado.trim());
}
