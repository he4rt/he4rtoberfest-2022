use std::{env, fmt};

fn main() {
    let input: Vec<String> = env::args().collect();

    if input.len() != 2 {
        println!("Você deve passar exatamente um argumento");

        return;
    }

    let dna = DnaSequence::from(input[1].clone());

    match dna {
        Ok(dna) => println!("{}", dna),
        Err(_) => println!("Sequência de DNA inválida")
    };
}

#[derive(Default)]
struct DnaSequence {
    adenine: u64,
    cytosine: u64,
    guanine: u64,
    thymine: u64,
}

impl DnaSequence {
    fn from(input: String) -> Result<Self, ()> {
        if input.is_empty() {
            return Err(());
        }

        let mut dna = Self::default();

        for char in input.chars() {
            let chars: Vec<char> = char.to_lowercase().collect();

            match chars.first().unwrap() {
                'a' => dna.adenine += 1,
                'c' => dna.cytosine += 1,
                'g' => dna.guanine += 1,
                't' => dna.thymine += 1,
                _   => return Err(())
            };
        }

        Ok(dna)
    }
}

impl fmt::Display for DnaSequence {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.write_str(
            format!(
                "'A': {}, 'C': {}, 'G': {}, 'T': {}",
                self.adenine,
                self.cytosine,
                self.guanine,
                self.thymine
            ).as_str()
        )
    }
}

#[cfg(test)]
mod tests {
    use crate::DnaSequence;

    #[test]
    fn return_an_error_with_invalid_input() {
        let invalid_input = String::from("INVALID");

        assert!(DnaSequence::from(invalid_input).is_err())
    }

    #[test]
    fn fail_with_empty_input() {
        let invalid_input = String::default();

        assert!(DnaSequence::from(invalid_input).is_err())
    }

    #[test]
    fn successfully_parse_input() {
        let input = String::from("GTACGCAG");

        let result = DnaSequence::from(input).unwrap();

        assert_eq!(
            format!("{}", result),
            "'A': 2, 'C': 2, 'G': 3, 'T': 1"
        );
    }
}
