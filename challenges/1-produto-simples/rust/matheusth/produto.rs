use std::io;

fn read_integers() -> (i64, i64) {
    let mut buffer = String::new();
    io::stdin()
        .read_line(&mut buffer)
        .expect("Não foi possivél ler a entrada padrão");

    let mut split = buffer.trim().split(' ');
    let number1 = split
        .next()
        .expect("Falhou ao ler input")
        .parse::<i64>()
        .expect("Entrada 1 não é um número inteiro");
    let number2 = split
        .next()
        .expect("Falhou ao ler input")
        .parse::<i64>()
        .expect("Entrada 2 não é um número inteiro");
    (number1, number2)
}

fn main() {
    let (number1, number2) = read_integers();
    let prod = number1 * number2;
    println!("produto: {}", prod);
}
