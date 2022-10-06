const input = parseInt(process.argv[2]);

function fizzBuzz(num:number):void {
    for(let e = 1; e <= num; e++) {
        if(!(e % 3) && !(e % 5)){
            console.log('FizzBuzz');
        }else if(!(e % 3)){
            console.log('Fizz');
        }else if(!(e % 5)){
            console.log('Buzz');
        }else {
            console.log(e);
        }
    }
    return
}

fizzBuzz(input)