use std::io::stdin;

fn main() {
    let mut buffer = String::new();
    println!("Insira os lados do triângulo separados por espaço");
    stdin().read_line(&mut buffer).unwrap();
    let mut lados: Vec<f64> = buffer
        .trim()
        .split(' ')
        .map(|s| s.parse().unwrap_or_else(|_| panic!("{s} is not a number")))
        .collect();
    lados.sort_by(|a, b| a.partial_cmp(b).unwrap());
    lados.reverse();

    let (a, b, c) = (lados[0], lados[1], lados[2]);

    if a >= b + c {
        println!("NAO FORMA TRIANGULO");
        return;
    }

    if a.powf(2.0) == b.powf(2.0) + c.powf(2.0) {
        println!("TRIANGULO RETANGULO");
    }

    if a.powf(2.0) > b.powf(2.0) + c.powf(2.0) {
        println!("TRIANGULO OBTUSANGULO");
    }

    if a.powf(2.0) < b.powf(2.0) + c.powf(2.0) {
        println!("TRIANGULO ACUTANGULO");
    }

    if a == b && b == c && a == c {
        println!("TRIANGULO EQUILATERO");
    } else if a == b || a == c || b == c {
        println!("TRIANGULO ISOSCELES");
    }
}
