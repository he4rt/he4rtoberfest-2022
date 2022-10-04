idade_dias = int(input("Insira a idade em dias:"))

dias_ano = 365 
dias_mes = 30

id_anos = idade_dias // dias_ano
id_meses = idade_dias % dias_ano // dias_mes
id_dias = idade_dias % dias_ano % dias_mes

print(id_anos, "ano(s)")
print(id_meses, "mes(es)")
print(id_dias, "dia(s)")
