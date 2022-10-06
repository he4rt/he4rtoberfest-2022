# Desafio #3

**Nome:** Tipos de Triângulo

**Descrição**: 

Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:

* se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
* se A² = B² + C², apresente a mensagem: TRIANGULO RETANGULO
* se A² > B² + C², apresente a mensagem: TRIANGULO OBTUSANGULO
* se A² < B² + C², apresente a mensagem: TRIANGULO ACUTANGULO
* se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
* se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES



**Input/Args**: A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

- 7.0 5.0 7.0
- 6.0 6.0 10.0
- 6.0 6.0 6.0
- 5.0 7.0 2.0

**Output**:

```
Entrada: 7.0 5.0 7.0

TRIANGULO ACUTANGULO
TRIANGULO ISOSCELES
```

```
Entrada: 6.0 6.0 10.0

TRIANGULO OBTUSANGULO
TRIANGULO ISOSCELES
```

```
Entrada: 6.0 6.0 6.0

TRIANGULO ACUTANGULO
TRIANGULO EQUILATERO
```

```
Entrada: 5.0 7.0 2.0

NAO FORMA TRIANGULO
```
