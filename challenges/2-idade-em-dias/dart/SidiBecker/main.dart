void main(List<String> arguments) {
  var dias = int.parse(arguments[0]);

  var anos = (dias ~/ 365);

  var meses = (dias % 365 ~/ 30);

  dias = (dias % 365 % 30).toInt();

  print(anos.toString() + ' ano(s)');
  print(meses.toString() + ' mes(es)');
  print(dias.toString() + ' dia(s)');
}
