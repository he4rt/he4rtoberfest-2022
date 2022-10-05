void main(List<String> arguments) {
  var totalSeconds = int.parse(arguments[0]);

  var hours = totalSeconds ~/ 3600;
  totalSeconds = totalSeconds % 3600;
  var minutes = totalSeconds ~/ 60;
  var seconds = totalSeconds % 60;

  print(toString(hours) + ':' + toString(minutes) + ':' + toString(seconds));
}

String toString(number) {
  return number.toString().padLeft(2, '0');
}
