print('Entre com as medidas dos lados de um triângulo.')
a = float(input('Digite o primeiro lado: '))
b = float(input('Digite o segundo lado: '))
c = float(input('Digite o terceiro lado: '))

lados = [a, b, c]
lados.sort(reverse=True)

a = lados[0]
b = lados[1]
c = lados[2]

if a >= b + c:
    print('NAO FORMA TRIANGULO')
else:
    if a ** 2 == b ** 2 + c ** 2:
        print('TRIANGULO RETANGULO')
    elif a ** 2 > b ** 2 + c ** 2:
        print('TRIANGULO OBTUSANGULO')
    elif a ** 2 < b ** 2 + c ** 2:
        print('TRIANGULO ACUTANGULO')
    if a == b == c:
        print('TRIANGULO EQUILATERO')
    elif a == b or c == b:
        print('TRIANGULO ISOSCELES')
