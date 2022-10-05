from sys import argv


def produto_simples(primeiro: int, segundo: int) -> int:
    """
    Calcula o produto entre dois valores inteiros.

    args:
        primeiro: Primeiro valor inteiro.
        segundo: Segundo valor inteiro.

    return:
        Produto entre dois valores inteiros.
    """
    return primeiro * segundo


if __name__ == "__main__":
    PROD = (int(value) for value in argv[-2:])
    produto = produto_simples(*PROD)
    print(f"produto: {produto}")
