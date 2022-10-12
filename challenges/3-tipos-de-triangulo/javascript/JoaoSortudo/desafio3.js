

let a = Number(process.argv.slice(2,3)); 
let b = Number(process.argv.slice(3,4));
let c = Number(process.argv.slice(4,5));

    if (a >= b+c || b >= a + c || c >= a + b){
        console.log("Não forma triângulo.")
    }
    else {
        if (a**2 == b**2 + c**2 || b**2 == a**2 + c**2 || c**2 == a**2 + b**2){
            console.log("Triângulo retângulo.")
        }
        else if (a**2 > b**2 + c**2 || b**2 > a**2 + c**2 || c**2 > a**2 + b**2){
            console.log("Triângulo obtusângulo.")
        }
        else if (a**2 < b**2 + c**2 || b**2 < a**2 + c**2 || c**2 < a**2 + b**2){
            console.log("Triângulo acutângulo.")
        }
      
        if (a === b && a === c){
            console.log("Triângulo equilátero.")
        }
        else if (a === b || a === c || b === c){
            console.log("Triângulo isósceles.")
        }        
    }