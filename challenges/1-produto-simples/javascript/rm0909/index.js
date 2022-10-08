const [,,input1,input2] = process.argv
const prod = (int1,int2)=>{
    const produto = parseInt(int1) * parseInt(int2)
    return console.log(`produto: ${produto}`)
}
prod(input1,input2)
