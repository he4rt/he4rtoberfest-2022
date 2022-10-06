main(List args) {
  var idadeEmDias = int.parse(args[0]);
  var anos = idadeEmDias ~/ 365;
  var meses = (idadeEmDias % 365) ~/ 30;
  var dias = idadeEmDias % 365 % 30;
  print('''
$anos ano(s)
$meses mes(es)
$dias dia(s)
  ''');
}
