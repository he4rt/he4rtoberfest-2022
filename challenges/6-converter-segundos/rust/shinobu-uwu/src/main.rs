use std::io::stdin;

fn main() {
    println!("Digite o número de segundos que você deseja converter");
    let mut buffer = String::new();
    stdin().read_line(&mut buffer).unwrap();

    let n: u64 = buffer
        .trim()
        .parse()
        .expect("O valor inserido não é um número inteiro");

    let horas = n / 3600;
    let minutos = n % 3600 / 60;
    let segundos = n - (horas * 3600 + minutos * 60);

    println!("{horas:#02}:{minutos:#02}:{segundos:#02}");
}
