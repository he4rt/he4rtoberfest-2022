
print("Insira os lados de um triangulo. \n")
a = float(input('A: '))
b = float(input('B: '))
c = float(input('C: '))

triangle = [a, b, c]
triangle.sort(reverse=True)

a = triangle[0]
b = triangle[1]
c = triangle[2]

if a >= b + c:
    print('NAO FORMA TRIANGULO')
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