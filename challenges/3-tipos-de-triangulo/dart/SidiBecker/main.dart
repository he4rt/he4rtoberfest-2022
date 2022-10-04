import 'dart:io';

void main(List<String> arguments) {
  var entrada = arguments.join(', ');

  // Ordena em ordem decrescente
  arguments.sort((b, a) => a.compareTo(b));

  var pontoA = double.parse(arguments[0]);
  var pontoB = double.parse(arguments[1]);
  var pontoC = double.parse(arguments[2]);

  var mensagem = '';

  // Quando já existe alguma mensagem, quebra a linha para por a próxima.
  var appendMessage = (arg) {
    if (mensagem == '') {
      mensagem = arg;
    } else {
      mensagem += ('\n' + arg);
    }
  };

  if (pontoA >= (pontoB + pontoC)) {
    print('Entrada: ' + entrada);
    print('NAO FORMA TRIANGULO');
    exit(0);
  }

  if (pontoA == (pontoB + pontoC)) {
    appendMessage('TRIANGULO RETANGULO');
  }
  if (pontoA > (pontoB + pontoC)) {
    appendMessage('TRIANGULO OBTUSANGULO');
  }
  if (pontoA < (pontoB + pontoC)) {
    appendMessage('TRIANGULO ACUTANGULO');
  }
  if (pontoA == pontoB && pontoB == pontoC) {
    appendMessage('TRIANGULO EQUILATERO');
  }
  if ((pontoA == pontoB && pontoA != pontoC) ||
      (pontoB == pontoC && pontoB != pontoA) ||
      (pontoA == pontoC && pontoB != pontoC)) {
    appendMessage('TRIANGULO ISOSCELES');
  }

  print('Entrada: ' + entrada);

  print(mensagem);
}
