use std::env;

fn main() {
    let inputs: Vec<String> = env::args().collect();

    if inputs.len() != 2 {
        println!("Você deve passar exatamente um argumento");

        return;
    }

    let input = inputs.get(1).unwrap().parse::<i32>();

    if input.is_err() {
        println!("Você deve passar um numero válido");

        return;
    }

    for number in 1..input.unwrap() {
        println!("{}", number.fizz_buzz());
    }
}

trait FizzBuzz {
    fn fizz_buzz(&self) -> String;
}

impl FizzBuzz for i32 {
    fn fizz_buzz(&self) -> String {
        match (*self % 3, *self % 5) {
            (0, 0) => String::from("FizzBuzz"),
            (0, _) => String::from("Fizz"),
            (_, 0) => String::from("Buzz"),
            _      => self.to_string()
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::FizzBuzz;

    #[test]
    fn should_return_fizz() {
        assert_eq!(6.fizz_buzz(), String::from("Fizz"));
        assert_eq!(3.fizz_buzz(), String::from("Fizz"));
    }

    #[test]
    fn should_return_buzz() {
        assert_eq!(5.fizz_buzz(), String::from("Buzz"));
        assert_eq!(10.fizz_buzz(),  String::from("Buzz"));
    }

    #[test]
    fn should_return_fizz_buzz() {
        assert_eq!(15.fizz_buzz(), String::from("FizzBuzz"));
        assert_eq!(30.fizz_buzz(), String::from("FizzBuzz"));
    }
}
