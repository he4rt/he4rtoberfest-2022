fn main() {
    let n: i32 = std::env::args()
        .skip(1)
        .next()
        .expect("a number is required")
        .parse()
        .expect("argument must be a integer");

    for i in 1..=n {
        if i % 5 == 0 && i % 3 == 0 {
            println!("FizzBuzz");
        } else if i % 3 == 0 {
            println!("Fizz");
        } else if i % 5 == 0 {
            println!("Buzz");
        } else {
            println!("{}", i);
        }
    }
}
