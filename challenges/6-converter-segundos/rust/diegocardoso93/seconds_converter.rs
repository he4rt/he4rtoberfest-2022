use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();

    let secs = args[2].parse::<u32>().unwrap();

    println!(
        "{:0>2}:{:0>2}:{:0>2}",
        secs / (60 * 60),
        secs % (60 * 60) / 60,
        secs % 60
    );
}
