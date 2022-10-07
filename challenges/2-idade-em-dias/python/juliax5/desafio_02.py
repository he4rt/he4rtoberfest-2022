def calc_idade(dias: int) -> str:
    anos = dias // 365
    meses = (dias % 365) // 30
    dias = (dias % 365) % 30
    return f'{anos} ano(s) \n{meses} mes(es) \n{dias} dia(s)'

while True:
    try:
        dias = int(input('Digite a quantidade de dias de idade: '))
        print(calc_idade(dias))
        break
    except ValueError:
        print('Input inválido, por favor digite um número inteiro.')
