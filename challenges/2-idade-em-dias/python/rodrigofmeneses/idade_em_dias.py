from sys import argv


def idade(idade_em_dias: int) -> tuple[int, int, int]:
    """
    Calcula a idade em número de anos, meses e dias dado o número de dias.

    args:
        idade_em_dias: Número de dias.

    return:
        Número de anos, meses e dias.
    """
    anos = idade_em_dias // 365
    meses = (idade_em_dias % 365) // 30
    dias = (idade_em_dias % 365) % 30
    return anos, meses, dias


if __name__ == "__main__":
    idade_em_dias = int(argv[-1])
    anos, meses, dias = idade(idade_em_dias)
    print(f'{anos} ano(s)')
    print(f'{meses} mes(es)')
    print(f'{dias} dia(s)')