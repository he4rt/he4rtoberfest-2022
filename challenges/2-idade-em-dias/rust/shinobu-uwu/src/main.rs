use std::io::stdin;

fn main() {
    let mut buffer = String::new();
    stdin().read_line(&mut buffer).unwrap();

    let idade: i32 = buffer.trim().parse().unwrap();

    let anos = idade / 365;
    let meses = idade % 365 / 30;
    let dias = idade - (anos * 365 + meses * 30);

    println!("{anos} ano(s)\n{meses} mes(es)\n{dias} dia(s)");
}
