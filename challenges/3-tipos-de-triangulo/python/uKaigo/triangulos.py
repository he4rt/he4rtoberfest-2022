import sys

lados = []

for i in range(1, 4):
    lados.append(float(input(f'Insira o {i}º lado: ')))

if any(x <= 0 for x in lados):
    print('O lado não pode ser menor ou igual a 0 (zero).')
    sys.exit(1)
a, b, c = sorted(lados, reverse=True)

print()

if a >= b + c:
    print('NAO FORMA TRIANGULO')
    sys.exit(0)

if a**2 == b**2 + c**2:
    print('TRIANGULO RETANGULO')
elif a * a > b * b + c * c:
    print('TRIANGULO OBTUSANGULO')
elif a * a < b * b + c * c:
    print('TRIANGULO ACUTANGULO')
if a == b == c:
    print('TRIANGULO EQUILATERO')
elif a == b or b == c or a == c:
    print('TRIANGULO ISOSCELES')
