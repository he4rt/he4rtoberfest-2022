# Submissão de Exercicio

**Exercicio:** 3 - Tipos de Triângulo

**Nickname:** LooserName404

**Nível Técnico:** Junior/Pleno

**Empresa:** Lambda3

**Twitter**: https://twitter.com/thyvini

**Dificuldade de Resolução:** Baixa

**Comentários:** Nesse desafio foi utilizada bastante composição de funções,
e também a abordagem de ROP (Railway-Oriented Programming) simples, com os 
recursos já existentes na linguagem, para criar um pipeline de execução que
já trata os erros de validação. Não foi feita a cobertura de testes para a
validação.

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
dotnet run --project TiposTriangulo -- 7.0 5.0 7.0
```

Para executar os testes unitários, execute o comando abaixo:
```bash
dotnet test
```