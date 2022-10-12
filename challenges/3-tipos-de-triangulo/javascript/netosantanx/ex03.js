const input1 = process.argv[2];
const input2 = process.argv[3];
const input3 = process.argv[4];

const triangleTypes = () => {
    const sides = [input1, input2, input3];
    sides.sort((a, b) => b - a);
    const sideA = +sides[0];
    const sideB = +sides[1];
    const sideC = +sides[2];

    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
        console.log(`Digite somente números maiores que zero.`);
        return;
    };

    if (sideA >= sideB + sideC) console.log(`Não forma triângulo.`);
    else if (sideA ** 2 === sideB ** 2 + sideC ** 2) console.log(`Triângulo retângulo`);
    else if (sideA ** 2 > sideB ** 2 + sideC ** 2) console.log(`Triângulo obtusângulo`);
    else if (sideA ** 2 < sideB ** 2 + sideC ** 2) console.log(`Triângulo acutângulo`);

    if (sideA === sideB && sideA === sideC) console.log(`Triângulo equilátero`);
    else if (sideA === sideB || sideB === sideC || sideC === sideB) console.log(`Triângulo isósceles`);
};
triangleTypes();