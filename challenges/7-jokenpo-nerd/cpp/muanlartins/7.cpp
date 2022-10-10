#include <bits/stdc++.h>

using namespace std;

map<pair<string, string>, string> resultado;

void adicionaCombinacao(pair<string, string> combinacao) {
    string primeiro = combinacao.first;
    string segundo = combinacao.second;

    resultado[{primeiro, segundo}] = "rajesh\n";
    resultado[{segundo, primeiro}] = "sheldon\n";
}

int main() {
    int casos;
    cin >> casos;

    
    adicionaCombinacao({"tesoura", "papel"});
    adicionaCombinacao({"papel", "pedra"});
    adicionaCombinacao({"pedra", "lagarto"});
    adicionaCombinacao({"lagarto", "spock"});
    adicionaCombinacao({"spock", "tesoura"});
    adicionaCombinacao({"tesoura", "lagarto"});
    adicionaCombinacao({"lagarto", "papel"});
    adicionaCombinacao({"papel", "spock"});
    adicionaCombinacao({"spock", "pedra"});
    adicionaCombinacao({"pedra", "tesoura"});

    while (casos--) {
        string rajesh, sheldon;
        cin >> rajesh >> sheldon;

        cout << ((rajesh == sheldon) ? "empate\b" : resultado[{rajesh, sheldon}]);
    }

    return 0;
}