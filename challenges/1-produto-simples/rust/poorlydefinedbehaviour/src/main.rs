fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut args = std::env::args();

    let _ = args.next();

    let a = args.next().unwrap().parse()?;

    let b = args.next().unwrap().parse()?;

    println!("produto: {}", product(a, b));

    Ok(())
}

fn product(a: i64, b: i64) -> i64 {
    a * b
}
