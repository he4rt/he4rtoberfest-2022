let arguments = process.argv.slice(2);

let numberone = parseInt(arguments[0]);
let numbertwo = parseInt(arguments[1]);

function calculate() {
   if(isNaN(numberone || numbertwo)) process.exit(1);

   const PROD = numberone * numbertwo;
   console.log(PROD);
}

calculate()