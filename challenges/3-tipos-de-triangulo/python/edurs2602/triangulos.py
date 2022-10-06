tri_lados = []


def tipoTriangulo(A, B, C):
    tri_lados.append(A)
    tri_lados.append(B)
    tri_lados.append(C)
    tri_lados.sort()

    A = tri_lados[2]
    B = tri_lados[1]
    C = tri_lados[0]

    if A >= B + C:
        print("NAO FORMA TRIANGULO")
    else:
        if A**2 == B**2 + C**2:
            print("TRIANGULO RETANGULO")
        if A**2 > B**2 + C**2:
            print("TRIANGULO OBTUSANGULO")
        if A**2 < B**2 + C**2:
            print("TRIANGULO ACUTANGULO")
        if A == B == C:
            print("TRIANGULO EQUILATERO")
        if A == B or B == C or C == A:
            print("TRIANGULO ISOSCELES")


A = float(input(""))
B = float(input(""))
C = float(input(""))
tri = tipoTriangulo(A, B, C)
