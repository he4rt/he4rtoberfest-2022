numeroCasosDeTeste = int(input("Entre a quantidade de casos de teste: "))

totalCoelhos = 0
totalRatos = 0
totalSapos = 0

for i in range(numeroCasosDeTeste):
    quantidade, tipo = input("Entre a quantidade e o tipo de animal: ").split()
    quantidade = int(quantidade)
    if tipo == "C":
        totalCoelhos += quantidade
    elif tipo == "R":
        totalRatos += quantidade
    elif tipo == "S":
        totalSapos += quantidade

totalAnimais = totalCoelhos + totalRatos + totalSapos

print()

print("Total: {} cobaias".format(totalAnimais))
print("Total de coelhos: {}".format(totalCoelhos))
print("Total de ratos: {}".format(totalRatos))
print("Total de sapos: {}".format(totalSapos))

percentualCoelho = (totalCoelhos / totalAnimais) * 100
percentualRato = (totalRatos / totalAnimais) * 100
percentualSapo = (totalSapos / totalAnimais) * 100

print("Percentual de coelhos: {:.2f} %".format(percentualCoelho))
print("Percentual de ratos: {:.2f} %".format(percentualRato))
print("Percentual de sapos: {:.2f} %".format(percentualSapo))
