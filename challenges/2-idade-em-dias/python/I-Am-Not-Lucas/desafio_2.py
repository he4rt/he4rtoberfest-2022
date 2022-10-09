idade_dias = int(input('Idade em dias: >'))

idade_ano = idade_dias // 365
idade_ano_resto = idade_dias % 365 

idade_mes = idade_ano_resto //30
idade_mes_resto = idade_ano_resto % 30

print(f'{idade_ano} anos(s)')
print(f'{idade_mes} mes(es)')
print(f'{idade_mes_resto} dia(s)')
