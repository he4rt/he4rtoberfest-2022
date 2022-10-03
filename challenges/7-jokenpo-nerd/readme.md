# Desafio #7

**Nome:** Jokenpo Nerd

**Descrição**: 

Pedra-papel-tesoura-lagarto-Spock é uma expansão do clássico método de seleção em jogo de pedra-papel-tesoura. Atua sob o mesmo princípio básico, mas inclui outras duas armas adicionais: o lagarto (formado pela mão igual a uma boca de fantoche) e Spock (formada pela saudação dos vulcanos em Star Trek). Isso reduz as chances de uma rodada terminar em um empate. O jogo foi inventado por Sam Kass e Karen Bryla, como "Rock Paper Scissors Lizard Spock". As regras de vantagem são as seguintes:

* Tesoura corta papel
* Papel cobre pedra
* Pedra derruba lagarto
* Lagarto adormece Spock
* Spock derrete tesoura
* Tesoura prende lagarto
* Lagarto come papel
* Papel refuta Spock
* Spock vaporiza pedra
* Pedra quebra tesoura

Um dia, dois amigos, Rajesh e Sheldon, decidiram apostar quem pagaria um almoço para o outro, com esta brincadeira. Sua missão será fazer um algoritmo que, baseado no que eles escolherem, informe quem irá ganhar ou se dará empate.

**Input/Args**: 
Haverá diversos casos de teste. O primeiro número a ser lido será um inteiro C, representando a quantidade de casos de teste. Cada caso de teste tem duas palavras, representando a escolha de Rajesh e de Sheldon, respectivamente.

```
3
spock spock
tesoura spock
lagarto spock
```

**Output**:
Para cada caso de teste, imprima quem venceu, ou se houve empate.

````
empate
sheldon
rajesh
```