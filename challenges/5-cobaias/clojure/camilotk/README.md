## Executando a solução

### Executando
Entre na pasta do desafio no seu terminal e rode o seguinte comando:
```bash
 $  clj -M:run
 ```
Durante a execução o prompt irá perguntar os inputs como descritos no problema.

## Testando a solução

Para executar os testes rode:
```bash
 $  clj -M:test
 ```

## Compilando a solução

Você pode compilar a solução com:
```bash
 $  clj -M:uberjar
 ```

E executar com:
```bash
 $ java -cp target/cobaias.jar clojure.main -m core
 ```
