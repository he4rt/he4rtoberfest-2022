idade = int(input('\nDigite uma idade: '))

ano = idade // 365
mes = (idade % 365) // 30
idade = (idade % 365) % 30

print('\n{} ano(s)'.format(ano))
print('{} mes(es)'.format(mes))
print('{} dia(s)'.format(idade))