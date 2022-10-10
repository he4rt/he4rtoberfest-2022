idade = int(input('Digite sua idade em dias: '))
calc_anos = idade // 365
calc_meses = (idade % 365) // 30
calc_dias = (idade % 365) % 30

print(f'{calc_anos} Ano(s)')
print(f'{calc_meses} Mes(es)')
print(f'{calc_dias} Dia(s)')
