days = int(input('Insira sua idade em dias: '))

years = days // 365
months = (days % 365) // 30
days = (days % 365) % 30

print(f"""
{years} ano(s)
{months} mes(es)
{days} dia(s)
""")