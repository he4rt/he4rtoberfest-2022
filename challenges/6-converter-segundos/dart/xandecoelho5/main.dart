main(List args) {
  var tempoEmSegundos = int.parse(args[0]);
  var horas = tempoEmSegundos ~/ 3600;
  var minutos = tempoEmSegundos % 3600 ~/ 60;
  var segundos = tempoEmSegundos % 3600 % 60;

  print(
    '${adicionarZeroNaEsquerda(horas)}:${adicionarZeroNaEsquerda(minutos)}:${adicionarZeroNaEsquerda(segundos)}',
  );
}

String adicionarZeroNaEsquerda(int valor) {
  return valor.toString().padLeft(2, '0');
}
