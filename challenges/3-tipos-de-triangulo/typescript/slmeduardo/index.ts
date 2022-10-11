function checkTriangle(x: number, y: number, z: number) {
    if(x == y && y == z) console.log("triangulo equilatero")
    else if(x == y || y == z || z == x) console.log("triangulo isosceles")
    else console.log("triangulo escaleno")
}

let x = 10, y = 10, z = 5;
checkTriangle(x, y, z);
 