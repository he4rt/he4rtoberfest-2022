import 'dart:io';

void main(List<String> arguments) {
  var mensagem = '';

  // Quando já existe alguma mensagem, quebra a linha para por a próxima.
  var appendMessage = (arg) {
    if (mensagem == '') {
      mensagem = arg;
    } else {
      mensagem += ('\n' + arg);
    }
  };

  var entrada = arguments.join(', ');

  // Transforma os argumentos em valores double.
  var pontos = arguments.map((e) => double.parse(e)).toList();

  // Ordena em ordem decrescente
  pontos.sort((b, a) => a.compareTo(b));

  var pontoA = pontos[0];
  var pontoB = pontos[1];
  var pontoC = pontos[2];

  if (pontoA >= (pontoB + pontoC)) {
    print('Entrada: ' + entrada);
    print('NAO FORMA TRIANGULO');
    exit(0);
  }

  pontoA = pontoA * pontoA;
  pontoB = pontoB * pontoB;
  pontoC = pontoC * pontoC;

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
