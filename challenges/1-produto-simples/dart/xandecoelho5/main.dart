main(List args) {
  var a = int.parse(args[0]);
  var b = int.parse(args[1]);
  var prod = multiplicar(a, b);
  print('produto: $prod');
}

int multiplicar(int a, int b) {
  return a * b;
}
