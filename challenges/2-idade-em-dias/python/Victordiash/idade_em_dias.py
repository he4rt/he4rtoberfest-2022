idade_inicial = int(input("coloque sua idade em dias, para visualizar ela em anos, meses e dias :"))
idade_ano = idade_inicial // 365
idade_meses = (idade_inicial % 365) // 30
idade_dias = (idade_inicial % 365) % 30

print(f" você possui {idade_ano} ano(s) de idade")
print(f" você possui {idade_meses} mes(es) de idade")
print(f" você possui {idade_dias} dia(s) de idade")