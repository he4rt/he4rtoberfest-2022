use std::env;
use std::num::ParseIntError;

fn main() {
    let args: Vec<String> = env::args().collect();
    let (n1, n2) = parse_args(&args).expect("Errow");
    let result = n1 * n2;
    println!("produto: {}", result);
}
fn parse_args(args: &[String]) -> Result<(i64, i64), ParseIntError> {
    let n1: i64 = (&args[1]).parse()?;
    let n2: i64 = (&args[2]).parse()?;
    Ok((n1, n2))
}
