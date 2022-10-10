use std::collections::HashMap;
use std::env;
use std::num::ParseFloatError;

fn main() {
    let args: Vec<String> = env::args().collect();
    let (a, b, c) = parse_args(&args).expect("Cade os 3 ags");
    println!("Entrada: {:?}", (a, b, c));

    if a >= b + c {
        println!("NAO FORMA TRIANGULO");
        return;
    }
    let triangle_message = get_message(a, b, c);
    let repeated_sides = HashMap::from([
        (a.to_string(), a),
        (b.to_string(), b),
        (c.to_string(), c),
    ]);
    let triangle_type = match repeated_sides.len() {
        1 => "TRIANGULO EQUILATERO",
        2 => "TRIANGULO ISOSCELES",
        _ => ""
    };
    println!("{}", triangle_message);
    println!("{}", triangle_type);
}

fn get_message(a: f64, b: f64, c: f64) -> &'static str {
    let a = a.powi(2);
    let b = b.powi(2);
    let c = c.powi(2);
    // A² = B² + C²
    if a == (b + c) {
        return "TRIANGULO RETANGULO";
    }
    // A² > B² + C²
    if a > (b + c) {
        return "TRIANGULO OBTUSANGULO";
    }
    // A² < B² + C²
    "TRIANGULO ACUTANGULO"
}

fn parse_args(args: &[String]) -> Result<(f64, f64, f64), ParseFloatError> {
    let a: f64 = (&args[1]).parse()?;
    let b: f64 = (&args[2]).parse()?;
    let c: f64 = (&args[3]).parse()?;
    Ok((a, b, c))
}
