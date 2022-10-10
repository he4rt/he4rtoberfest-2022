use std::io::stdin;

fn main() {
    let mut buffer = String::new();
    println!("Digite o número de testes");
    stdin().read_line(&mut buffer).unwrap();

    let n: i32 = buffer
        .trim()
        .parse()
        .expect("A entrada não é um número inteiro");
    buffer = String::new();
    let mut total_coelhos = 0;
    let mut total_ratos = 0;
    let mut total_sapos = 0;

    for _ in 0..n {
        stdin().read_line(&mut buffer).unwrap();
        let dados: Vec<&str> = buffer.trim().split(' ').collect();
        let cobaias_utilizadas: i32 = dados[0]
            .parse()
            .expect("Número de cobaias não é um número inteiro");

        match dados[1] {
            "C" => total_coelhos += cobaias_utilizadas,
            "R" => total_ratos += cobaias_utilizadas,
            "S" => total_sapos += cobaias_utilizadas,
            _ => {}
        }

        buffer = String::new();
    }

    let total = total_coelhos + total_ratos + total_sapos;
    println!("Total: {total} cobaias");
    println!("Total de coelhos: {total_coelhos}");
    println!("Total de ratos: {total_ratos}");
    println!("Total de sapos: {total_sapos}");
    println!(
        "Percentual de coelhos: {:.2} %",
        (total_coelhos as f64) / (total as f64) * 100.0
    );
    println!(
        "Percentual de ratos: {:.2} %",
        (total_ratos as f64) / (total as f64) * 100.0
    );
    println!(
        "Percentual de sapos: {:.2} %",
        (total_sapos as f64) / (total as f64) * 100.0
    );
}
