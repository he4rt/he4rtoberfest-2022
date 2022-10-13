#include <iostream>

using namespace std;

int main() {
    float a, b, c, aux;
    cin >> a >> b >> c;
    if (b > a) {
        aux = a;
        a = b;
        b = aux;
    } else if (c > a) {
        aux = a;
        a = c;
        c = aux;
    }
    if (a >= b + c) {
        cout << "Não forma triangulo" << endl;
    } else if ((a * a) == (b * b + c * c)) {
        cout << "Triangulo retangulo" << endl;
    } else if ((a * a) > (b * b + c * c)) {
        cout << "Triangulo obtusangulo" << endl;
    } else if ((a * a) < (b * b + c * c)) {
        cout << "Triangulo acutangulo" << endl;
    }
    
    if (a == b == c) {
        cout << "Triangulo equilatero" << endl;
    } else if (a == b || b == c || a == c) {
        cout << "Triangulo isosceles" << endl;
    }
}
