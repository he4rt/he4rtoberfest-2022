use std::{collections::HashMap, io::stdin};

fn main() {
    let mut vantagens = HashMap::new();
    vantagens.insert("tesoura", ["papel", "lagarto"]);
    vantagens.insert("papel", ["pedra", "spock"]);
    vantagens.insert("pedra", ["lagarto", "tesoura"]);
    vantagens.insert("lagarto", ["spock", "papel"]);
    vantagens.insert("spock", ["tesoura", "pedra"]);

    let mut buffer = String::new();
    stdin().read_line(&mut buffer).unwrap();

    let n: i32 = buffer.trim().parse().unwrap();
    let mut resultado = String::new();
    buffer = String::new();

    for _ in 0..n {
        stdin().read_line(&mut buffer).unwrap();
        let jogada: Vec<&str> = buffer.trim().split(' ').collect();

        if jogada[0] == jogada[1] {
            resultado.push_str("empate\n");
            buffer = String::new();
            continue;
        }

        if vantagens.get(jogada[0]).unwrap().contains(&jogada[1]) {
            resultado.push_str("rajesh\n");
            buffer = String::new();
            continue;
        }

        resultado.push_str("sheldon\n");
        buffer = String::new();
    }

    println!("{resultado}");
}
