# Submissão de Exercicio

**Exercicio:** 3 - Tipos de Triângulo

**Nickname:** teuso99

**Nível Técnico:** Junior

**Empresa:** Marlin

**Twitter**: https://twitter.com/teuso99

**Dificuldade de Resolução:**  Media

**Comentários:** Nesse desafio eu achei um pouco de dificuldade para ler os argumentos por causa do separador de decimal. 

No C# ele identifica qual simbolo e o separador pela informacoes de cultura extraidas de um objeto CultureInfo, na [documentacao oficial](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo?view=net-6.0) voce pode ver como ele faz para obter essa informacao dependendo da versao do .NET.

Resumindo, como meu Windows esta em PT-BR ele identificava a cultura pt-BR e entendia que o separador era a virgula e nao o ponto. 

Entao tentei implementar uma solucao que entendesse tanto o ponto quanto a virgula. Porem fiquei travado e nao consegui aplicar nada que funcionasse. Entao eu fui salvo por essa [pergunta no SO](https://stackoverflow.com/questions/29452263/make-tryparse-compatible-with-comma-or-dot-decimal-separator) e implementei essa solucao usando Regex:

```c#
var cultureInfo = CultureInfo.InvariantCulture;
    
    if (Regex.IsMatch(args[1], @"^(:?[\d,]+\.)*\d+$"))
    {
        cultureInfo = new CultureInfo("en-US");
    }
    else if (Regex.IsMatch(args[1], @"^(:?[\d.]+,)*\d+$"))
    {
        cultureInfo = new CultureInfo("pt-BR");
    }
```

**Como rodar o desafio**: 

Use o comando abaixo: 

```bash
dotnet run challenge-3.csproj args1 args2 args3
```

Onde ***args1***, ***args2*** e ***args3*** devem ser substituidos pelos numeros ponto flutuante desejados!