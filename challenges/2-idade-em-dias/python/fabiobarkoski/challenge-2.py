from sys import argv

# valor de dias a serem convertidos
dias_a_converter = int(argv[1])

# pega o valor intero em dias e dividi por 365 dias para saber quantiade de anos
quantidade_anos = int(dias_a_converter/365)
# apos, subtrai os dias multiplicado pela quantidade de anos que possui
dias_a_converter = dias_a_converter - (365*quantidade_anos)
# realiza a mesma tarefa para os meses
quantidade_meses = int(dias_a_converter/30)
# sobrando apenas os dias
quantidade_dias = dias_a_converter - (30*quantidade_meses)
print(f'{quantidade_anos} ano(s)\n{quantidade_meses} mes(es)\n{quantidade_dias} dia(s)')
