use std::env;
use std::fmt::Display;
use std::collections::HashMap;
use strum::{IntoEnumIterator, EnumIter};

fn main() {
    let args: Vec<String> = env::args().collect();

    let experiments = Experiments::from(args);

    experiments.print_kind_totals();
    experiments.print_kind_percentages();
}

#[derive(Default, Debug)]
struct Experiments {
    experiments: HashMap<Kind, u64>
}

impl Experiments {
    fn from(raw_experiments: Vec<String>) -> Self {
        let given_total: usize = raw_experiments[1].parse().unwrap();

        if given_total != (raw_experiments.len() - 1) / 2  {
            panic!("You must give the exact amount of experiments you pass in the first argument.");
        }

        let mut experiments = HashMap::default();

        let mut index = 2;

        loop {
            if index > given_total * 2 {
                break
            }

            let experiment = Experiment::from(
                raw_experiments[index + 1].clone(),
                raw_experiments[index].clone(),
            );

            match experiments.get(&experiment.kind) {
                Some(experiment_amount) => experiments.insert(
                    experiment.kind,
                    experiment.amount as u64 + experiment_amount
                ),
                None => experiments.insert(
                    experiment.kind,
                    experiment.amount as u64
                )
            };

            index += 2;
        }

        Self { experiments }
    }

    pub fn print_kind_percentages(&self) {
        for kind in Kind::iter() {
            let amount = match self.experiments.get(&kind) {
                Some(amount) => amount.to_owned(),
                None => 0,
            };

            let mut len = 0;

            for (_, amount) in self.experiments.iter() {
                len += amount;
            }

            let percentage = (amount * 100) as f64 / len as f64;

            println!("Percentual de {}s: {:.2}%", kind, percentage)
        }
    }

    pub fn print_kind_totals(&self) {
        for kind in Kind::iter() {
            let amount = match self.experiments.get(&kind) {
                Some(amount) => amount.to_owned(),
                None => 0,
            };

            println!("Total de {}s: {}", kind, amount)
        }
    }
}

struct Experiment {
    kind: Kind,
    amount: u8
}

impl Experiment {
    pub fn from(kind: String, amount: String) -> Self {
        let amount = amount.parse()
            .unwrap_or_else(|_| panic!("You should give the amount as a valid integer"));

        if amount < 1 {
            panic!("The amount must be greater or equal 1")
        }

        if amount > 15 {
            panic!("The amount must be lower or equal 15")
        }

        let kind = Kind::from(kind.as_str())
            .unwrap_or_else(|_|
                panic!("You should give the experiment type in one of the following types: C, R, S")
            );

        Self { kind, amount }
    }
}

#[derive(Hash, PartialEq, Eq, Debug, EnumIter)]
enum Kind {
    Coelho,
    Rato,
    Sapo,
}

impl Display for Kind {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Coelho => f.write_str("coelho"),
            Kind::Rato   => f.write_str("rato"),
            Kind::Sapo   => f.write_str("sapo"),
        }
    }
}

impl Kind {
    fn from(value: &str) -> Result<Self, ()> {
        match value {
            "C" => Ok(Self::Coelho),
            "R" => Ok(Self::Rato),
            "S" => Ok(Self::Sapo),
            _ => Err(())
        }
    }
}
