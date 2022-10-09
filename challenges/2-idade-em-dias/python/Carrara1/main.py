#Carrara1



age = int(input("Insira a sua idade em dias! \n"))
#Anos
y = int((age / 365))
#Meses
m = int(((age - (y * 365)) / 30))
#Dias
d = int(((age - (y * 365)) - m * 30))


print(f"{y} ano(s)\n {m} mes(es)\n {d} dia(s)\n")


#Poderia também: salvar a equação (age - (y * 365)) em uma variavel, mas.. XD