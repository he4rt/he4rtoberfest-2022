## Executando a solução

### Passando os argumentos na chamada
Entre na pasta do desafio no seu terminal e rode o seguinte comando: 
```bash
 $  clj -M:run 10 20
 ```
E em seguida terá o resultado da operação.

### Passando os argumentos em runtime
Entre na pasta do desafio no seu terminal e rode o seguinte comando:
```bash
 $  clj -M:run
 ```
Durante a execução o prompt irá perguntar quais são os números.

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
 $ java -cp target/triangulo.jar clojure.main -m core
 ```
ou executar com:
```bash
 $ java -cp target/triangulo.jar clojure.main -m core 6.0 6.0 10.0
 ```