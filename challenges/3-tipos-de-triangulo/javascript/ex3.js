//Pai nosso que estais no céu faz esse código funcionar pfvr
let A = process.argv[2]
let B = process.argv[3]
let C = process.argv[4]
let lados = [A, B, C]
lados.sort((a, b) => b - a);
let ladoA = lados[0];
let ladoB = lados[1];
let ladoC = lados[2];
console.log(ladoA, ladoB, ladoC);
if (ladoA >= (Number(ladoB) + Number(ladoC))){
    console.log("Não forma triângulo.")
    return;
  }
  else {
    if ((ladoA === ladoB) && (ladoB === ladoC)) {
    console.log("triângulo equilátero.")
  }
  if ((ladoA === ladoB && ladoA != ladoC) || (ladoB === ladoC && ladoB != ladoA) || (ladoA === ladoC && ladoA != ladoB)) {
    console.log("triângulo isóceles.")
  }
  else if (Math.pow(ladoA, 2) === Math.pow(ladoB, 2) + Math.pow(ladoC, 2)) {
    console.log("Triângulo retângulo.")
}
  else if (Math.pow(ladoA, 2) > Math.pow(ladoB, 2) + Math.pow(ladoC, 2)) {
    console.log("triângulo obtusângulo.")
}
  else if (Math.pow(ladoA, 2) < Math.pow(ladoB, 2) + Math.pow(ladoC, 2)) {
    console.log("triângulo acutângulo.")
}
}
  //só lembrando que todo triângulo equilátero é também isóceles por isso se o output for equilátero vai ser isóceles também.
