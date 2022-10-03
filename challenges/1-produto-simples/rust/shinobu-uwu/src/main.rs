use std::io::stdin;

fn main() {
    let mut buffer = String::new();
    stdin().read_line(&mut buffer).unwrap();
    let n1: i32 = buffer.trim().parse().unwrap();

    let mut buffer = String::new();
    stdin().read_line(&mut buffer).unwrap();
    let n2: i32 = buffer.trim().parse().unwrap();

    let prod = n1 * n2;
    println!("produto: {prod}");
}
