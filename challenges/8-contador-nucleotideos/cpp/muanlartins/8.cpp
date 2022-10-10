#include <bits/stdc++.h>

using namespace std;

int main() {
    string dna; cin >> dna;

    // Guarda pares chave-valor com a frequência de cada 
    // nucleotideo (caracter) no DNA (string de entrada)
    map<char, int> frequencia;
    string nucleotideos = "ACGT";

    for (char nucleotideo : dna) {
        // Equivalente a dizer que o caracter do DNA da entrada é diferente de
        // A, C, G ou T
        if (nucleotideos.find(nucleotideo) == string::npos) {
            cout << "Sequência de DNA inválida\n";
            return 0;
        }
        frequencia[nucleotideo]++;
    }

    cout << frequencia['A'] << ' ' << frequencia['C'] << ' ' << frequencia['G'] << ' ' << frequencia['T'] << '\n';

    return 0;
}