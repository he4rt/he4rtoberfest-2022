let daysInput = parseInt(process.argv[2]);

let yearsQuantity = Math.round(daysInput / 365); 


let monthQuantity = Math.round((daysInput % 365) / 30);

let daysQuantity = Math.round((daysInput % 365) % 30);


console.log(`${yearsQuantity} ano(s)\n${monthQuantity} mes(es)\n${daysQuantity} dia(s)
`);