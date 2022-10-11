# Submissão de Exercicio

**Exercicio:** 1 - Produto Simples

**Nickname:** LooserName404

**Nível Técnico:** Junior/Pleno

**Empresa:** Lambda3

**Twitter**: https://twitter.com/thyvini

**Dificuldade de Resolução:** Baixa

**Comentários:** Para esse desafio, além do Paket e de testes unitários,
foi explorado o recurso de Active Patterns do F#, para validação da quantidade
de argumentos recebidos da linha de comando e para conversão dos parâmetros de
entrada para inteiros.

**Como rodar o desafio**: 
Para baixar as dependências (necessárias para rodar os testes), execute os comandos abaixo:
```bash
dotnet tool restore
dotnet paket restore
```

Para compilar os projetos da solução, execute o comando abaixo:
```bash
dotnet build
```

Para executar o projeto, execute o comando abaixo:
```bash
dotnet run --project ProdutoSimples -- 13 13
```

Para executar os testes unitários, execute o comando abaixo:
```bash
dotnet test
```