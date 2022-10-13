idade = int(input('Idade em dias: '))

anos, idade = idade//365, idade%365

meses, dias = idade//30, idade%30

print(f'{anos} anos(s)\n{meses} mes(es)\n{dias} dia(s)')

