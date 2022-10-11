#tipos de triangulo

a, b, c = input().split()
a = float(a)
b = float(b)
c = float(c)

# ordem descrecente
if a < b:
    a, b = b, a
if b < c:
    b, c = c, b
if a < b:
    a, b = b, a

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
    if (a == b != c) or (a == c != b) or (b == c != a):
        print("TRIANGULO ISOSCELES")

