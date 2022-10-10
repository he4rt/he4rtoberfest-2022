print('Informe os valores para montar o Triangulo: ')
a = float(input('Digite o primeiro lado: '))
b = float(input('Digite o segundo lado: '))
c = float(input('Digite o terceiro lado: '))

valores = [a, b, c]
valores.sort(reverse=True)

a = valores[0]
b = valores[1]
c = valores[2]

if a >= b + c:
    print('NÃO FORMA TRIANGULO')
else:
    if a ** 2 == (b ** 2) + (c ** 2):
        print('TRIANGULO RETANGULO')
    elif a ** 2 > (b ** 2) >= (c ** 2):
        print('TRIANGULO OBTUSANGULO')
    elif a ** 2 < (b ** 2) + (c ** 2):
        print('TRIANGULO ACUTANGULO')
    if a == b == c:
        print('TRIANGULO EQUILATERO')
    elif a == b  or c == b:
        print('TRIANGULO ISOSCELES')
