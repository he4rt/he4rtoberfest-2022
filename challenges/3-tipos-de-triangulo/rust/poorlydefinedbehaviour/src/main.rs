fn main() {
    let mut args = std::env::args().skip(1);

    let a: f32 = args
        .next()
        .expect("argument is required")
        .parse()
        .expect("argument must be a float");
    let b: f32 = args
        .next()
        .expect("argument is required")
        .parse()
        .expect("argument must be a float");
    let c: f32 = args
        .next()
        .expect("argument is required")
        .parse()
        .expect("argument must be a float");

    let mut values = [a, b, c];
    values.sort_by(|a, b| b.partial_cmp(a).unwrap_or(std::cmp::Ordering::Less));

    let a = values[0];
    let b = values[1];
    let c = values[2];

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

    if a == b && a == c {
        println!("TRIANGULO EQUILATERO");
    } else if a == b || b == c || a == c {
        println!("TRIANGULO ISOSCELES");
    }
}
