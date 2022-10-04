import 'dart:io';

const pedra = 'pedra';
const papel = 'papel';
const tesoura = 'tesoura';
const lagarto = 'lagarto';
const spock = 'spock';

const Map<String, List<String>> mapPossibilidades = {
  pedra: [lagarto, tesoura],
  papel: [pedra, spock],
  tesoura: [papel, lagarto],
  lagarto: [spock, papel],
  spock: [tesoura, pedra],
};

main() {
  var c = int.parse(stdin.readLineSync()!);

  for (int i = 0; i < c; ++i) {
    var linha = stdin.readLineSync()!.split(' ');
    var mao1 = linha[0].toLowerCase();
    var mao2 = linha[1].toLowerCase();

    print(obterResultado(mao1, mao2));
  }
}

String obterResultado(String mao1, String mao2) {
  if (mao1 == mao2) return 'empate';

  if (mapPossibilidades[mao1]!.contains(mao2)) return 'rajesh';

  return 'sheldon';
}
