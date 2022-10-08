function prod_simples(arg1, arg2){
    let result = arg1 * arg2;
    
    if (isNaN(arg1) || isNaN(arg2)){
        return 'ERROR';
    }

    else{
        return `produto: ${result}`
    }
}

console.log(prod_simples(10,3))
console.log(prod_simples(5,5))
