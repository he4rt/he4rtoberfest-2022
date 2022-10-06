print('-=' * 10)
print('Descubra o tipo de triangulo informando o valor de seus lados: ')
A = float(input('Primeiro valor: '))
B = float(input('Segundo valor: '))
C = float(input('Terceiro valor: '))
print('-=' * 10)

valores = [A, B, C]

valores.sort(reverse=True)

A = valores[0]
B = valores[1]
C = valores[2]

if A >= B + C:
    print('NÃO FORMA TRIANGULO')
else:
    if A ** 2 == (B ** 2) + (C ** 2):
        print('TRIANGULO RETANGULO')
    elif A ** 2 > (B ** 2) >= (C ** 2):
        print('TRIANGULO OBTUSANGULO')
    elif A ** 2 < (B ** 2) + (C ** 2):
        print('TRIANGULO ACUTANGULO')
if A == B == C:
    print('TRIANGULO EQUILATERO')
if A == B != C or A != B == C or A == C != B:
    print('TRIANGULO ISOSCELES')
