const [,,input1,input2] = process.argv;
const prod = (input1,input2)=>{
    const num1 = parseInt(input1)
    const num2 = parseInt(input2)
    if(isNaN(num1) || isNaN(num2)){
        console.log("inputs devem ser números");
    }else{
        return console.log(`produto: ${num1 * num2}`)
    }
}
prod(input1,input2)