A, B, C = input("Entrada: ").split(" ")
values = [float(A), float(B), float(C)]
values.sort(reverse=True)
A = values[0]
B = values[1]
C = values[2]

IVALID: bool = A >= (B + C)
RETANGULO: bool = A**2 == (B**2 + C**2)
OBTUSANGULO: bool = A**2 > (B**2) >= (C**2)
ACUTANGULO: bool = A**2 < (B**2 + C**2)
EQUILATERO: bool = A == B == C
ISOSCELES: bool = A == B != C or A != B == C or A == C != B

if IVALID is True:
    print("NAO FORMA TRIANGULO")
else:
    if OBTUSANGULO is True:
        print("TRIANGULO OBTUSANGULO")

    if ACUTANGULO is True:
        print("TRIANGULO ACUTANGULO")

    if EQUILATERO is True:
        print("TRIANGULO EQUILATERO")

    if ISOSCELES is True:
        print("TRIANGULO ISOSCELES")
