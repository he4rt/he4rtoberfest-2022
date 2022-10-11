# Submissão de Exercicio

**Exercicio:** 0 - Hello World

**Nickname:** LooserName404

**Nível Técnico:** Junior/Pleno

**Empresa:** Lambda3

**Twitter**: https://twitter.com/thyvini

**Dificuldade de Resolução:** Baixa

**Comentários**: Este provavelmente é o Hello World em F# mais 'bloated' que você já viu.
Nele, foi feito um teste unitário utilizando o Expecto, e configurado o Paket como gerenciador
de dependências no lugar do NuGet.

**Como rodar o desafio**: 

Para baixar as dependências (necessárias para rodar o teste), execute os comandos abaixo:
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
dotnet run --project HelloWorld
```

Para executar o teste unitário, execute o comando abaixo:
```bash
dotnet test
```