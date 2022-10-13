from sys import argv


def fizz_buzz(valor: int) -> str:
    """
    Exibe os números de 1 até o valor indicado. 
    Caso o número a ser exibido seja divisível por 3, exibe 'Fizz' no seu lugar.
    Caso seja divisível por 5, exibe 'Buzz'.
    Caso seja divisível por ambos, exibe 'FizzBuzz'

    args:
        valor: Número referente ao total de iterações.

    return:
        Texto referente a lógica do programa.
    """
    fb = ''
    for numero in range(1, valor + 1):
        if numero % 3 == 0 and numero % 5 == 0:
            fb += 'FizzBuzz\n'
        elif numero % 3 == 0:
            fb += 'Fizz\n'
        elif numero % 5 == 0:
            fb += 'Buzz\n'
        else:
            fb += f'{numero}\n'
        
    return fb


if __name__ == "__main__":
    valor = int(argv[-1])
    print(fizz_buzz(valor))