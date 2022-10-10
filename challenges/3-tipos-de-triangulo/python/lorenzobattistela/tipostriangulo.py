SIDES = 3
sides_lst = []
for i in range(SIDES):
    sides_lst.append(float(input("Input size: ")))
sides_lst.sort(reverse=True)

sideA, sideB, sideC = sides_lst

if sideA >= (sideB + sideC):
    print('NAO FORMA TRIANGULO')
else:
    sum_of_squares = (pow(sideB, 2) + pow(sideC, 2))
    aSqrd = pow(sideA, 2)
    if aSqrd == sum_of_squares:
        print('TRIANGULO RETANGULO')
    elif aSqrd > sum_of_squares:
        print('TRIANGULO OBTUSANGULO')
    elif aSqrd < sum_of_squares:
        print('TRIANGULO ACUTANGULO')
    if sideA == sideB == sideC:
        print('TRIANGULO EQUILATERO')
    elif sideA == sideB or sideC == sideB:
        print('TRIANGULO ISOSCELES')