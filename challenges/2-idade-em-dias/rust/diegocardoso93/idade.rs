use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();

    let dias = args[2].parse::<u64>().unwrap();

    println!(
        "{} ano(s)\n{} mes(es)\n{} dia(s)",
        dias / 365,
        (dias % 365) / 30,
        (dias % 365) % 30
    );
}
