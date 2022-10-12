#include <iostream>

using namespace std;

int main() {
    int totalDias;
    cin >> totalDias;
    int anos = totalDias / 365;
    int restoAnos = totalDias % 365;
    int meses = restoAnos / 30;
    int restoMeses = restoAnos % 30;
        
    cout << anos << " ano(s)" << endl;
    cout << meses << " mes(es)" << endl;
    cout << restoMeses << " dia(s)" << endl;
}
