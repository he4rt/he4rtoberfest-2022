use std::env;

fn main() {
    let inputs: Vec<String> = env::args().collect();

    let a = inputs.get(1)
        .expect("you should give two integers").parse()
        .expect("you should give a valid integer");

    let b = inputs.get(2)
        .expect("you should give two integers").parse()
        .expect("you should give a valid integer");

    println!("produto: {}", product(a, b));
}

fn product(a: i64, b: i64) -> i64 {
    a * b
}

#[cfg(test)]
mod test {
    use crate::product;

    #[test]
    fn five_times_five() {
        assert_eq!(product(5, 5), 25)
    }

    #[test]
    fn ten_times_three() {
        assert_eq!(product(10, 3), 30)
    }
}
