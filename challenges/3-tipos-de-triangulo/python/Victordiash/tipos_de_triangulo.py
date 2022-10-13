print("Insira três valores do lado de um triângulo")
A = float(input("insira o primeiro valor :"))
B = float(input("insira o segundo valor :"))
C = float(input("insira o terceiro valor :"))

lados_tri = [A,B,C]
lados_tri.sort(reverse= True)
A = lados_tri[0]
B = lados_tri[1]
C = lados_tri[2]

if A >= B + C :
    print("NAO FORMA TRIANGULO")
else:
    if A ** 2 == B ** 2 + C ** 2 :
        print("TRIANGULO RETANGULO")
    elif A ** 2 > B ** 2 + C ** 2:
        print("TRIANGULO OBTUSANGULO")
    elif A ** 2 < B ** 2 + C ** 2:
        print("TRIANGULO ACUTANGULO")
    if A == B == C:
        print("TRIANGULO EQUILATERO")
    elif A == B or B == C:
        print("TRIANGULO ISOSCELES")
 