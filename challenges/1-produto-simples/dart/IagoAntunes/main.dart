void main(List<String> arguments) {
  var valor1 = int.parse(arguments[0]);
  var valor2 = int.parse(arguments[1]);
  var PROD = 0;
  arguments.forEach((element) {});

  multiplica(int a, int b) => PROD = a * b;

  print('produtos: ${multiplica(valor1, valor2)}');
}
