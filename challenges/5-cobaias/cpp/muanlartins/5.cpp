#include <bits/stdc++.h>

using namespace std;

map<char, double> cobaias;

int main() {
    int n;
    cin >> n;
    
    while (n--) {
        int quantia; 
        char cobaia;
        cin >> quantia >> cobaia;
        cobaias[cobaia] += quantia;
    }

    double coelhos = cobaias['C'];
    double ratos = cobaias['R'];
    double sapos = cobaias['S'];
    double total = coelhos + ratos + sapos;

    cout << "Total: " << total << " cobaias\n"
         << "Total de coelhos: " << coelhos << '\n'
         << "Total de ratos: " << ratos << '\n'
         << "Total de sapos: " << sapos << '\n'
         << "Percentual de coelhos: " << fixed << setprecision(2) << coelhos/total * 100.0 << " %\n"
         << "Percentual de ratos: " << fixed << setprecision(2) << ratos/total * 100.0 << " %\n"
         << "Percentual de sapos: " << fixed << setprecision(2) << sapos/total * 100.0 << " %\n";

    return 0;
}