nexp = int(input('Insira o número de experimentos: '))

animals = {'c': 0, 'r': 0, 's': 0}

for i in range(1, nexp + 1):
    count, anim_typ = input(f'{i}º: ').lower().split()

    animals[anim_typ[0]] += int(count)

tot_anim = sum(animals.values())

print(f'Total: {tot_anim} cobaias')
print(f'Total de coelhos: {animals["c"]}')
print(f'Total de ratos: {animals["r"]}')
print(f'Total de sapos: {animals["s"]}')

print(f'Percentual de coelhos: {animals["c"]/tot_anim:.2%}')
print(f'Percentual de ratos: {animals["r"]/tot_anim:.2%}')
print(f'Percentual de sapos: {animals["s"]/tot_anim:.2%}')
