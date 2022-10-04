use std::{env, fmt::Display};

fn main() {
    let args: Vec<String> = env::args().collect();

    let input: u64 = args.get(1)
        .expect("You should give at least one number").parse()
        .expect("You should give a valid positive integer");

    let result = Result::from(input);

    println!("{}", result);
}

#[derive(Debug, PartialEq, PartialOrd)]
struct Result {
    years: u16,
    months: u8,
    days: u8,
}

impl Result {
    fn from(mut days: u64) -> Self {
        let mut years = 0;
        let mut months = 0;

        loop {
            if days >= 365 {
                days -= 365;
                years += 1;

                continue;
            }

            if days >= 30 {
                days -= 30;
                months += 1;

                continue;
            }

            return Self {
                years,
                months,
                days: days as u8
            }
        }
    }
}

impl Display for Result {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_str(
            format!(
                "{} ano(s)\n{} mes(es)\n{} dia(s)",
                self.years,
                self.months,
                self.days
            ).as_str()
        )
    }
}

#[cfg(test)]
mod tests {
    use super::Result;

    #[test]
    fn four_hundred_days() {
        assert_eq!(
            Result {
                years: 1,
                months: 1,
                days: 5
            },
            Result::from(400)
        )
    }

    #[test]
    fn eight_hundred_days() {
        assert_eq!(
            Result {
                years: 2,
                months: 2,
                days: 10
            },
            Result::from(800)
        )
    }

    #[test]
    fn thirty_days() {
        assert_eq!(
            Result {
                years: 0,
                months: 1,
                days: 0,
            },
            Result::from(30)
        )
    }
}
