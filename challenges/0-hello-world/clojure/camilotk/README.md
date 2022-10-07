## Executando a solução

Entre na pasta do desafio no seu terminal e rode o seguinte comando: 
```bash
 $  clj -M:run
 ```

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
 $ java -cp target/hello.jar clojure.main -m hello
 ```