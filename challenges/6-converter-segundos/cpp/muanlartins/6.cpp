#include <bits/stdc++.h>

using namespace std;

int main() {
    int segundosTotais;
    cin >> segundosTotais;

    int horas = segundosTotais/3600;
    segundosTotais %= 3600;
    int minutos = segundosTotais/60;
    segundosTotais %= 60;
    int segundos = segundosTotais;

    cout << setfill('0') << setw(2) << horas << ':' 
         << setfill('0') << setw(2) << minutos << ':' 
         << setfill('0') << setw(2) << segundos << '\n';

    return 0;
}