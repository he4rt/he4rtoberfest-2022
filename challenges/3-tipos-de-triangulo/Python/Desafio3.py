#Desafio3
print("Insira as medidas para descobrir o tipo de triângulo:")

a = float(input("Primeiro lado:"))
b = float(input("Segundo lado:"))
c = float(input("Terceiro lado:"))

lado_triangulo = [a, b, c]
lado_triangulo.sort(reverse = True)

a = lado_triangulo[0]
b = lado_triangulo[1]
c = lado_triangulo[2]

if a >= b + c:
  print("NAO FORMA TRIANGULO")
else:
  if a ** 2 == b ** 2 + c ** 2:
    print("TRIANGULO RETANGULO")
  elif a ** 2 > b ** 2 + c ** 2:
    print("TRIANGULO OBTUSANGULO")
  elif a ** 2 < b ** 2 + c ** 2:
    print("TRIANGULO ACUTANGULO")