void main(List<String> arguments) {
  var valor1 = int.parse(arguments[0]);
  var valor2 = int.parse(arguments[1]);
  var prod = (int a, int b) => a * b;

  print('produtos ${prod(valor1, valor2)}');
}
