## Executando a solução

### Executando
Entre na pasta do desafio no seu terminal e rode o seguinte comando:
```bash
 $  clj -M:run
 ```
Durante a execução o prompt irá perguntar quais são os nomes e quais jogadas.

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
 $ java -cp target/fizzbuzz.jar clojure.main -m core
 ```