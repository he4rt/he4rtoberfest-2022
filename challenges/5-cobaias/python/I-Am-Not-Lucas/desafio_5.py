casos_teste = int(input(">>"))

casos_ratos = 0
casos_sapos = 0
casos_coelhos = 0

for number in range(casos_teste):
    caso = input(">>").upper()

    if "R" in caso:
        caso = caso.split(' ')
        inteiro = int(caso[0])
        casos_ratos += inteiro

    
    elif "S" in caso:
        caso = caso.split(' ')
        inteiro = int(caso[0])
        casos_sapos += inteiro


    elif "C" in caso:
        caso = caso.split(' ')
        inteiro = int(caso[0])
        casos_coelhos += inteiro


    else:
        print("Nada computado")

total = casos_coelhos + casos_ratos + casos_sapos

print(f'Total: {total} cobaias')
print(f"Total de coelhos: {casos_coelhos}")
print(f"Total de ratos: {casos_ratos}")
print(f"Total de sapos: {casos_sapos}")

porcentual_coelhos = casos_coelhos / total * 100
print(f'Percentual de coelhos: {porcentual_coelhos:.2f} %')

porcentual_ratos = casos_ratos / total * 100
print(f'Percentual de ratos: {porcentual_ratos:.2f} %')

porcentual_sapos = casos_sapos / total * 100
print(f'Percentual de sapos: {porcentual_sapos:.2f} %')