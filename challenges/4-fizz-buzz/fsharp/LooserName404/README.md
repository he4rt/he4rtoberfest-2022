# Submissão de Exercicio

**Exercicio:** 4 - Fizz Buzz

**Nickname:** LooserName404

**Nível Técnico:** Junior/Pleno

**Empresa:** Lambda3

**Twitter**: https://twitter.com/thyvini

**Dificuldade de Resolução:** Baixa

**Comentários:** Nesse desafio foi utilizada a abordagem de Exception
junto com a função `Int32.Parse` ao invés de utilizar pattern matching
para validação de input.

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
dotnet run --project FizzBuzz -- 33
```

Para executar os testes unitários, execute o comando abaixo:
```bash
dotnet test
```