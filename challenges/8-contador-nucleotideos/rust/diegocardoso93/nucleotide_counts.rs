use std::env;

static NUCLEOTIDES: &[char] = &['A', 'C', 'G', 'T'];

fn count(nucleotide: char, dna: &str) -> Result<usize, String> {
    match (dna.is_empty() || dna.chars().into_iter().all(|c| NUCLEOTIDES.contains(&c)))
        && NUCLEOTIDES.contains(&nucleotide)
    {
        true => Ok(dna.len() - dna.replace(nucleotide, "").len()),
        false => Err("Sequência de DNA inválida".to_string()),
    }
}

fn nucleotide_counts(dna: &str) -> Result<String, String> {
    Ok(format!(
        "'A': {}, 'C': {}, 'G': {}, 'T': {}",
        count('A', dna)?,
        count('C', dna)?,
        count('G', dna)?,
        count('T', dna)?
    ))
}

fn main() {
    let args: Vec<String> = env::args().collect();

    println!(
        "{}",
        match nucleotide_counts(&args[2]) {
            Ok(msg) => msg,
            Err(msg) => msg,
        }
    );
}
