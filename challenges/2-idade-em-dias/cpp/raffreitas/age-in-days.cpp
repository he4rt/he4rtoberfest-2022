#include <bits/stdc++.h>

using namespace std;

int main()
{

  int ageDays, ageMonth, ageYear;

  cin >> ageDays;

  ageYear = ageDays / 365;
  ageMonth = (ageDays % 365) / 30;
  ageDays = (ageDays % 365) % 30;

  cout << ageYear << " ano(s)" << endl;
  cout << ageMonth << " mes(es)" << endl;
  cout << ageDays << " dia(s)" << endl;

  return 0;
}
