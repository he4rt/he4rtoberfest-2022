# Desafio #8

**Nome:** Contador de Nucleotídeos

**Descrição**:

Uma sequência de DNA é uma série de letras representando a estrutura primária de uma molécula ou cadeia de DNA com a capacidade de carregar informações.

As letras possíveis são A, C, G e T, representando os quatro nucleotídeos de uma cadeia de DNA – adenina, citosina, guanina e timina.

**Desafio**: Leia uma string representando uma sequência de DNA e conte quantos de cada nucleotídeo estão presentes nela, conforme os exemplos abaixo.

---
**Input/Args**:
```
"GATTACA"
```

**Output**: O resultado deve representar a contagem dos nucleotídeos A, C, G e T, nessa ordem.

```
"3 1 1 2"

ou

"'A': 3, 'C': 1, 'G': 1, 'T': 2"
```

---
**Input/Args**:
```
"INVALID"
```

**Output**: Se a string possuir algum caractere que não seja um nucleotídeo A, C, G ou T, você deve retornar uma mensagem de erro.
```
"Sequência de DNA inválida"
```