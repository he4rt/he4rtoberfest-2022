const readline = require("readline");

function getYearsByDays(days) {
  const time = new Date(null);
  time.setDate(days);
  console.log("Years: ", time.getFullYear() - 1970);
  console.log("Months: ", time.getMonth());
  console.log("Days: ", time.getDate());
}

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Days: ", (days) => {
  getYearsByDays(days);
  input.close();
});
