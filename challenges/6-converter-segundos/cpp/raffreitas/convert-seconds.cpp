#include <bits/stdc++.h>

using namespace std;

void convertSeconds(int tempSec) {
  int tempMin, tempHour;

  tempHour = tempSec / 3600;
  tempMin = (tempSec % 3600) / 60;
  tempSec = (tempSec % 3600) % 60;

  if(tempHour >= 10) cout << tempHour << ":";
  else cout << "0" << tempHour << ":";

  if(tempMin >= 10) cout << tempMin << ":";
  else cout << "0" << tempMin << ":";

  if(tempSec >= 10) cout << tempSec << endl;
  else cout << "0" << tempSec << endl;
}

int main() {
  int seconds;

  cin >> seconds;

  convertSeconds(seconds);

  return 0;
}