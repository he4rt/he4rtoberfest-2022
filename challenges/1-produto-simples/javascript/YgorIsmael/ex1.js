let numero1 = process.argv[2];
let numero2 = process.argv[3];
 if (isNaN(numero1) || isNaN(numero2)){
    console.log("Não é um número!")
} else {
    const PROD = parseInt(numero1) * parseInt(numero2);
    console.log("O produto é:", PROD);
 };