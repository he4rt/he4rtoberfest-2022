use std::env;

enum Type {
    RECTANGLE,
    OBTUSE,
    ACUTE,
    EQUILATERAL,
    ISOSCELES,
    INVALID
}

#[derive(Debug)]
struct Triangle {
    side_a: f32,
    side_b: f32,
    side_c: f32
}

impl Triangle {
    fn get_type(&self) -> Vec<Type>{
        let mut list_type = vec!();

        if self.side_a >= self.side_b + self.side_c {
            list_type.push(Type::INVALID);
            return list_type;
        }
      
        if self.side_a.powi(2) == self.side_b.powi(2) + self.side_c.powi(2) {
            list_type.push(Type::RECTANGLE);
        }
       
        if self.side_a.powi(2) > self.side_b.powi(2) + self.side_c.powi(2){
            list_type.push(Type::OBTUSE);
        }

        if self.side_a.powi(2) < self.side_b.powi(2) + self.side_c.powi(2){
            list_type.push(Type::ACUTE);
        }
        
        if self.side_a == self.side_b && self.side_a == self.side_c && self.side_b == self.side_c{
            list_type.push(Type::EQUILATERAL);
        }else if self.side_a == self.side_b || self.side_a == self.side_c || self.side_c == self.side_b{
            list_type.push(Type::ISOSCELES);
        }
       

        return list_type;
    }
}

fn main() {
    let args: Vec<String> = env::args().collect();

    let side_a = parse_agr_to_float(args.get(1));
    let side_b = parse_agr_to_float(args.get(2));
    let side_c = parse_agr_to_float(args.get(3));
   
    let mut values = [side_a, side_b, side_c];
    values.sort_by(|x, y| y.partial_cmp(x).unwrap());

    let triangle = Triangle {
        side_a: values[0],
        side_b: values[1],
        side_c: values[2]
    };

    print_types(triangle);
}

fn parse_agr_to_float(arg: Option<&String>) -> f32{
    let arg = match arg {
        Some(val) => val,
        None => {
            panic!("need 3 float valid params");
        }
    };

    match arg.parse::<f32>() {
        Ok(val) => return val,
        Err(_e) => {
            panic!("need 3 float valid params");
        }
    };    
}

fn print_types(triangle: Triangle){    
    triangle.get_type().iter().for_each(|x| 
        match x  {
            Type::RECTANGLE => println!("TRIANGULO RETANGULO"),
            Type::OBTUSE => println!("TRIANGULO OBTUSANGULO"),
            Type::ACUTE => println!("TRIANGULO ACUTANGULO"),
            Type::EQUILATERAL => println!("TRIANGULO EQUILATERO"),
            Type::ISOSCELES => println!("TRIANGULO ISOSCELES"),
            Type::INVALID => println!("NAO FORMA TRIANGULO")
        }
    );    
}
