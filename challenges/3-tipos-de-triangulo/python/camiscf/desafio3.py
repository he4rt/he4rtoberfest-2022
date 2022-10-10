a,b,c = input().split()
a = float(a)
b = float(b)
c = float(c)

# ordena os valores em ordem decrescente
if a < b:
    a,b = b,a
if a < c:
    a,c = c,a
if b < c:
    b,c = c,b

# verifica se é um triangulo
if a >= b + c:
    print("NAO FORMA TRIANGULO")
else:
    if a**2 == b**2 + c**2:
        print("TRIANGULO RETANGULO")
    if a**2 > b**2 + c**2:
        print("TRIANGULO OBTUSANGULO")
    if a**2 < b**2 + c**2:
        print("TRIANGULO ACUTANGULO")
    if a == b == c:
        print("TRIANGULO EQUILATERO")
    if (a == b and a != c) or (a == c and a != b) or (b == c and b != a):
        print("TRIANGULO ISOSCELES")

