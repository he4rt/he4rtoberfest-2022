import 'valores.dart';

main(List args) {
  var valores = Valores(
    a: double.parse(args[0]),
    b: double.parse(args[1]),
    c: double.parse(args[2]),
  );

  classificarTriangulo(valores.a, valores.b, valores.c);
}

// main(List args) {
//   var a = double.parse(args[0]);
//   var b = double.parse(args[1]);
//   var c = double.parse(args[2]);
//
//   var lista = [a, b, c];
//   lista.sort((v1, v2) => v2.compareTo(v1));
//   classificarTriangulo(lista[0], lista[1], lista[2]);
// }

void classificarTriangulo(double a, double b, double c) {
  if (a >= (b + c)) {
    print('NAO FORMA TRIANGULO');
    return;
  }

  var a2 = a * a;
  var b2 = b * b;
  var c2 = c * c;

  if (a2 == (b2 + c2))
    print('TRIANGULO RETANGULO');
  else if (a2 > (b2 + c2))
    print('TRIANGULO OBTUSANGULO');
  else
    print('TRIANGULO ACUTANGULO');

  if (a == b && b == c)
    print('TRIANGULO EQUILATERO');
  else if (a == b || b == c || a == c) print('TRIANGULO ISOSCELES');
}
