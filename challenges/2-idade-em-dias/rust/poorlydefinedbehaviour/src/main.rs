fn main() {
    let days: i32 = std::env::args()
        .skip(1)
        .next()
        .expect("number of days is required")
        .parse()
        .expect("number of days must be a number");

    let years = days / 365;
    let months = days % 365 / 30;
    let days = days % 365 % 30;

    println!("{years} ano(s)");
    println!("{months} mes(es)");
    println!("{days} dia(s)");
}
