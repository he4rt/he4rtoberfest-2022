class Valores {
  Valores({required this.a, required this.b, required this.c}) {
    _ordenarValores();
  }

  double a;
  double b;
  double c;

  void _ordenarValores() {
    var aux = a;
    if (b > a) {
      a = b;
      b = aux;
    }
    aux = a;
    if (c > a) {
      a = c;
      c = aux;
    }
    aux = b;
    if (c > b) {
      b = c;
      c = aux;
    }
  }
}
