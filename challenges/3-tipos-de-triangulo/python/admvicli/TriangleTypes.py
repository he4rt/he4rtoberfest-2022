valor = input('Insira os três valores: ').split()
lados = list()

for numero in valor:
    lados.append(float(numero))
lados.sort()

valorA, valorB, valorC = lados[2], lados[1], lados[0]

if valorA >= valorB + valorC:
    print('NÃO FORMA TRIANGULO')
elif valorA ** 2 == valorB ** 2 + valorC ** 2:
    print('TRIANGULO RETÂNGULO')
elif valorA ** 2 > valorB ** 2 + valorC ** 2:
    print('TRIANGULO OBTUSANGULO')
elif valorA ** 2 < valorB ** 2 + valorC **2:
    print('TRIANGULO ACUTANGULO')

if valorA == valorB == valorC:
    print('TRIANGULO EQUILATERO')
elif valorA == valorB or valorB == valorC:
    print('TRIANGULO ISOSCELES')