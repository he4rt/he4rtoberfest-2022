const lados = process.argv.slice(2).map((elemento:string) => parseFloat(elemento));

lados.sort((a:number, b:number) => b - a);

function acharTipoDoTriangulo([ladoA, ladoB, ladoC]:number[]):void {
    if(ladoA >= ladoB + ladoC) {
        console.log('NAO FORMA TRIANGULO')
        return;
    }
    if(ladoA ** 2 == (ladoB ** 2 + ladoC ** 2)) {
        console.log('TRIANGULO RETANGULO')
    }
    if(ladoA ** 2 > (ladoB ** 2 + ladoC ** 2)) {
        console.log('TRIANGULO OBTUSANGULO');
    }
    if(ladoA ** 2 < (ladoB ** 2 + ladoC ** 2)) {
        console.log('TRIANGULO ACUTANGULO');
    }
    if(ladoA == ladoB && ladoB == ladoC) {
        console.log('TRIANGULO EQUILATERO');   
    }
    if(ladoA == ladoB && ladoA != ladoC || ladoB == ladoC && ladoB != ladoA || ladoC == ladoA && ladoC != ladoB){
        console.log('TRIANGULO ISOSCELES');
    }
    return;
}
acharTipoDoTriangulo(lados)