
def age_calc(days):

    years = days // 365

    months = (days % 365) // 30

    days = (days % 365) % 30

    return f"""it is {years} years and {months} months and {days} days"""




days = int(input("Digite quantos dias: "))

print(age_calc(days))