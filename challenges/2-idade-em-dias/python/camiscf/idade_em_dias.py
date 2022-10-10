days = int(input())
years = days // 365
days = days % 365
months = days // 30
days = days % 30
print('{} ano(s)'.format(years))
print('{} mes(es)'.format(months))
print('{} dia(s)'.format(days))
