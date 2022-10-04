var numeros = process.argv
  
function multiplica(num1, num2) {  
    return parseInt(num1)*parseInt(num2) 
}
  
var produto = multiplica(numeros[2], numeros[3])
  
console.log("produto: ", produto)