print('Digite sua idade em dias para vê-la em anos, meses e dias.')
idade = int(input('Digite sua idade: '))
anos = idade // 365
meses = (idade % 365) // 30
dias = (idade % 365) % 30
print('{} ano(s)'.format(anos))
print('{} mes(s)'.format(meses))
print('{} dia(s)'.format(dias))
