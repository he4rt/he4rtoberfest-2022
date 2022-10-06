data = int(input('Digite a data em dias: '))

anos = data // 365
meses = (data % 365) // 30
dias = (data % 365) % 30

print(f'{anos} ano(s)\n')
print(f'{meses} mes(s)\n')
print(f'{dias} dia(s)\n')
