#include <iostream>

using namespace std;

int main() {
    int totalSegundos;
    cin >> totalSegundos;
    int horas = totalSegundos / 3600;
    int restoHoras = totalSegundos % 3600;
    int minutos = restoHoras / 60;
    int restoMinutos = restoHoras % 60;
    cout << horas << ":" << minutos << ":" << restoMinutos << endl;
}
