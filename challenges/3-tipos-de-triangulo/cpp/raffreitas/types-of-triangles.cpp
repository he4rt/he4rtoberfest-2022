#include <bits/stdc++.h>

using namespace std;

void typeOfTriangles(float a, float b, float c)
{
  if (a >= (b + c) || b >= (a + c) || c >= (b + a))
    cout << "NAO FORMA TRIANGULO" << endl;
  else if (pow(a, 2) == (pow(b, 2) + pow(c, 2)) || pow(b, 2) == (pow(a, 2) + pow(c, 2)) || pow(c, 2) == (pow(a, 2) + pow(b, 2)))
    cout << "TRIANGULO RETANGULO" << endl;
  else if (pow(a, 2) > (pow(b, 2) + pow(c, 2)) || pow(b, 2) > (pow(a, 2) + pow(c, 2)) || pow(c, 2) > (pow(a, 2) + pow(b, 2)))
    cout << "TRIANGULO OBTUSANGULO" << endl;
  else if (pow(a, 2) < (pow(b, 2) + pow(c, 2)) || pow(b, 2) < (pow(a, 2) + pow(c, 2)) || pow(c, 2) < (pow(a, 2) + pow(b, 2)))
    cout << "TRIANGULO ACUTANGULO" << endl;
  if (a == b && b == c)
    cout << "TRIANGULO EQUILATERO" << endl;
  if ((a == b && b != c) || (a == c && c != b) || (b == c && c != a))
    cout << "TRIANGULO ISOSCELES" << endl;
}

int main()
{

  float a, b, c;

  cin >> a >> b >> c;

  typeOfTriangles(a, b, c);

  return 0;
}
