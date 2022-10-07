from sys import argv

# valor inteiro a ser lido
valor = int(argv[1])

# realiza um laço com o valor
for v in range(1, valor+1):
    # se o valor for divisivel por 5 e 3, printa FizzBuzz
    if (v % 5) == 0 and (v % 3) == 0:
        print('FizzBuzz')
    # caso seja apenas por 3, printa Fizz
    elif (v % 3) == 0:
        print('Fizz')
    # caso seja apenas por 5, printa Buzz
    elif (v % 5) == 0:
        print('Buzz')
    # caso nao seja por 5 nem por 3, printa o numero
    else:
        print(v)
