while True:
    try:
        days = int(input('Insira sua idade em dias: '))
    except ValueError:
        print('Insira um número válido. Tente novamente.')
    else:
        break

years, days = divmod(days, 365)
months, days = divmod(days, 30)

print(f'{years} ', "anos" if years != 1 else "ano")
print(f'{months} ', "meses" if months != 1 else "mês")
print(f'{days} ', "dias" if days != 1 else "dia")
