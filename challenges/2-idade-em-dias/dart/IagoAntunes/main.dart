void main(List<String> arguments) {
  var dias = 800;
  var anos = (dias / 365).round();
  var meses = (dias % 365 / 30).round();

  dias = (dias % 365 % 30).round();

  print('${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)');
}
