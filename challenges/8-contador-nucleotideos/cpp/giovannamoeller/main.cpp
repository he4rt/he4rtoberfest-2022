#include <iostream>

using namespace std;

int main() {
    string sequence;
    cin >> sequence;
    int nucleotideos[4] = {0, 0, 0, 0};
    bool isInvalid = false;
    for (int i = 0; i < sequence.length(); i++) {
        switch (sequence[i]) {
            case 'A': nucleotideos[0] += 1; break;
            case 'C': nucleotideos[1] += 1; break;
            case 'G': nucleotideos[2] += 1; break;
            case 'T': nucleotideos[3] += 1; break;
            default: isInvalid = true; break;
        }
    }
    if (isInvalid) {
        cout << "Sequência de DNA inválida" << endl;
    } else {
        for (int i = 0; i < 4; i++) {
            cout << nucleotideos[i] << " ";
        }
    }
}