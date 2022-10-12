from urllib import response


def ageCalculator(days):
    years = days // 365
    months = (days % 365) // 30
    days = (days % 365) % 30
    return f'{years} anos \n{months} meses \n{days} dias'


print(ageCalculator(int(input("informe a quantidade de dias: "))))