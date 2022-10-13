n = int(input('N: '))

cobaias = {'C': 0, 'R':0,'S': 0}
total_cobaias = 0

for i in range(n):

    valor, cobaia = input('').split(' ')
    
    cobaias[cobaia] += int(valor)
    total_cobaias += int(valor)
    
print()
print(f'Total: {total_cobaias} cobaias')
print(f"Total de coelhos: {cobaias['C']} ")
print(f"Total de ratos: {cobaias['R']} ")
print(f"Total de sapos: {cobaias['S']} ")
print(f"Percentual de coelhos: {round(cobaias['C']/total_cobaias*100,2)} %")
print(f"Percentual de ratos: {round(cobaias['R']/total_cobaias*100,2)} %")
print(f"Percentual de sapos: {round(cobaias['S']/total_cobaias*100,2)} %")