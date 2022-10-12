const readline = require("readline");

const arg = parseInt(process.argv.slice(2, 3)); //optional

function formatSecs(secs) {
  const time = new Date(null);
  
  time.setSeconds(secs);
  
  const hour = time.getHours() - 1; const min = time.getMinutes(); const sec = time.getSeconds();
  
  console.log(`${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`);
  return;
}

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

if(!arg){
  input.question("Seconds: ", (secs) => {
    formatSecs(secs);
    input.close();
  });
} else {
  formatSecs(arg);
  process.exit();
}
