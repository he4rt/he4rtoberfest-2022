void main(List<String> arguments) {
  var dias = int.parse(arguments[0]);

  var anos = (dias ~/ 365);

  var meses = (dias % 365 ~/ 30);

  dias = (dias % 365 % 30).toInt();

  print(anos.toString() + ' ano(s)');
  print(meses.toString() + ' meses(s)');
  print(dias.toString() + ' dias(s)');
}
