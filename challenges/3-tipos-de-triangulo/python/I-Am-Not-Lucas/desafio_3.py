lista_lados = []

a = float(input("Lado a >>"))
b = float(input("Lado b >>"))
c = float(input("Lado c >>"))


lista_lados.append(a)
lista_lados.append(b)
lista_lados.append(c)
lista_lados.sort(reverse=True)

print("Entrada: ", end='')
for valor in lista_lados:
    print(valor, end=' ')
print()
print()

def nomenclatura1(lista):
    if lista_lados[0] >= lista_lados[1] + lista_lados[2]:
        print("NAO FORMA TRIANGULO")

    elif lista_lados[0] ** 2 == lista_lados[1] **2 + lista_lados[2] **2:
        print("TRIANGULO RETANGULO")

    elif lista_lados[0] ** 2 > lista_lados[1] **2 + lista_lados[2] **2:
        print("TRIANGULO OBTUSANGULO")

    elif lista_lados[0] ** 2 < lista_lados[1] **2 + lista_lados[2] **2:
        print("TRIANGULO ACUTANGULO")

def nomenclatura2 (n1, n2, n3):
    equilatero = False

    if n1 == n2 and n2 == n3:
        print("TRIANGULO EQUILATERO")
        equilatero = True

    elif n1 == n2 or n2 == c or c == n1 and not equilatero:
        print("TRIANGULO ISOSCELES")

nomenclatura1(lista_lados)
nomenclatura2(a, b, c)


