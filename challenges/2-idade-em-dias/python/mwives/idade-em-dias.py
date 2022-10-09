idadeEmDias = int(input("Entre com a idade em dias: "))

DIAS_NO_ANO = 365
DIAS_NO_MES = 30

anos = idadeEmDias // DIAS_NO_ANO
meses = (idadeEmDias % DIAS_NO_ANO) // DIAS_NO_MES
dias = (idadeEmDias % DIAS_NO_ANO) % DIAS_NO_MES


print(anos, "ano(s)")
print(meses, "mes(es)")
print(dias, "dia(s)")