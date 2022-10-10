void main(List<String> arguments) {
  var valor1 = int.parse(arguments[0]);
  var valor2 = int.parse(arguments[1]);

  var PROD = valor1 * valor2;

  print('produto: ' + PROD.toString());
}
