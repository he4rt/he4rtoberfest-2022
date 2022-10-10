from typing import List

def normaliza(valores: List):
    valores.sort()

    A = valores[2]
    B = valores[1]
    C = valores[0]

    if A >= B + C:
        print('NAO FORMA TRIANGULO')
    elif A**2 == B**2 + C**2:
        print('TRIANGULO RETANGULO')
    elif A**2 > B**2 + C**2:
        print('TRIANGULO OBTUSANGULO')
    elif A**2 < B**2 + C**2:
        print('TRIANGULO ACUTANGULO')
    if A == B == C:
        print('TRIANGULO EQUILATERO')
    elif A == B or A == C or B == C:
        print('TRIANGULO ISOSCELES')

x = float(input('Valor decimal do primeiro lado: '))
y = float(input('Valor decimal do segundo lado: '))
z = float(input('Valor decimal do terceiro lado: '))

valores = [x, y, z]
normaliza(valores)
