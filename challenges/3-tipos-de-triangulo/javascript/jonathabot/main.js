const args = process.argv.slice(2);

console.log("Entrada:" + ' ' + args[0] + ' ' + args[1] + ' ' +  args[2])
console.log();

args.map(Number);
// Primeiro vai ordernar com o .sort de (menor -> maior) e depois com o .reverse de (maior -> menor).
args.sort(function(a, b) {
    return a - b;
  }).reverse();

const a = args[0];
const b = args[1];
const c = args[2];

if (a < b + c) {
    if (elevarADois(a) == elevarADois(b) + elevarADois(c)) {
        console.log("TRIANGULO RETANGULO");
    } 
    if (elevarADois(a) > elevarADois(b) + elevarADois(c)) {
        console.log("TRIANGULO OBTUSANGULO");
    } 
    if (elevarADois(a) < elevarADois(b) + elevarADois(c)) {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (tresLadosIguais(a, b, c) == true) {
        console.log("TRIANGULO EQUILATERO");
    }
    if (doisLadosIguais(a, b, c) == true) {
        console.log("TRIANGULO ISOSCELES");
    }

} else {
    console.log('NAO FORMA TRIANGULO');
}

function elevarADois(valor) {
    valor = Math.pow(valor, 2);
    return valor;
}

function tresLadosIguais(valor1, valor2, valor3) {
    if (valor1 === valor2 && valor1 === valor3) {
        return true;
    } else {
        return false;
    }
}

function doisLadosIguais(valor1, valor2, valor3) {
    if (tresLadosIguais(valor1, valor2, valor3) === true) {
        return false;
    }else if (args.includes(a || b || c[0, 2])) {
        return true;
    } else {
        return false;
    }
}