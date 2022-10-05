use std::io;

fn main() {
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Erro: falha ao ler entrada.");
    let mut idade_dias: u64 = input
        .trim()
        .parse()
        .expect("Erro: Entrada não é um número inteiro");

    let idade_anos = idade_dias / 365;
    idade_dias %= 365;
    let idade_meses = idade_dias / 30;
    idade_dias %= 30;

    println!("{} ano(s)", idade_anos);
    println!("{} mes(ses)", idade_meses);
    println!("{} dia(s)", idade_dias);
}
