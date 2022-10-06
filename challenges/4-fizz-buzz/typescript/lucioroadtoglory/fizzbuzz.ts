const limit: number = Math.floor(Number(process.argv[2]));
for (let i = 1, str = ""; i <= limit; i++, str = "") {
  !(i % 3) && (str += "Fizz");
  !(i % 5) && (str += "Buzz");
  console.log(str || i);
}
