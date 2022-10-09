function hhmmss(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const secondsLeft = seconds - hours * 3600 - minutes * 60;

  const hoursString = hours < 10 ? `0${hours}` : hours;
  const minutesString = minutes < 10 ? `0${minutes}` : minutes;
  const secondsString = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

  console.log(`${hoursString}h:${minutesString}m:${secondsString}s`);
}

hhmmss(7650);
