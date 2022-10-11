# Submissão de Exercicio

**Exercicio:** 6 - Converter segundos

**Nickname:** digzom

**Nível Técnico:** - Junior -

**Empresa:** Lambda3

**Twitter**: https://twitter.com/cyberproblem1

**Dificuldade de Resolução:** - Baixa -

**Comentários**: Pensei em criar um módulo inteiro para tratar o erro de ser uma quantidade em segundos que fosse maior do que 23:59:59 (porque aí já 
configura-se dias, o que quebra o formato proposto no exercício), mas resolvi criar sem isso apenas para mostrar como essas transformações podem ser
feitas com módulos prontos de elixir/erlang.

**Como rodar o desafio**:

No seu terminal, navege até a pasta do desafio `/elixir/digzom` e rode o seguinte comando:

```bash
elixir converter_segundos_exs argv
```

Ex.:

```bash
elixir converter_segundos.exs 28394
# 07:53:14
```

O número em segundos deve estar entre 0 e 86399 (número máximo de segundos em 1 dia).
