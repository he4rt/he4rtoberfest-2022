#include <bits/stdc++.h>

using namespace std;

void cobaias(int n) {
  int rato = 0, sapo = 0, coelho = 0, quant;
  float total = 0;
  char tipo;

  for (int i = 0; i < n; i++) {
    cin >> quant >> tipo;

    switch (tipo) {
    case 'C':
      coelho += quant;
      break;
    case 'R':
      rato += quant;
      break;
    case 'S':
      sapo += quant;
      break;
    }
    total += quant;
  }

  cout << "Total: " << total << " cobaias" << endl;
  cout << "Total de coelhos: " << coelho <<endl;
  cout << "Total de ratos: " << rato << endl;
  cout << "Total de sapos: " << sapo << endl;
  cout << fixed << setprecision(2) << "Percentual de coelhos: " << (coelho / total) * 100 << " %" <<endl;
  cout << fixed << setprecision(2)  << "Percentual de ratos: " << (rato / total) * 100 << " %" <<endl;
  cout << fixed << setprecision(2)  << "Percentual de sapos: " << (sapo / total) * 100 << " %" <<endl;
 
  return;
}

int main() {
  int n;
  
  cin >> n;

  cobaias(n);

  return 0;
}