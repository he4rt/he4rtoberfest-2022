use std::io::stdin;

fn main() {
    let mut buffer = String::new();
    stdin().read_line(&mut buffer).unwrap();

    let n: i32 = buffer.trim().parse().expect("Não foi inserido um número");

    for i in 1..=n {
        if i % 3 == 0 && i % 5 == 0 {
            println!("FizzBuzz");
            continue;
        }

        if i % 3 == 0 {
            println!("Fizz");
            continue;
        }

        if i % 5 == 0 {
            println!("Buzz");
            continue;
        }

        println!("{i}");
    }
}
