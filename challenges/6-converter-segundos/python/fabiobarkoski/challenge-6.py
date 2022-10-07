from sys import argv

# valor a ser convertido
segundos_a_converter = int(argv[1])

# lista para armazenar valores [h,m,s]
horario = []
# dividi os segundos pelo valor de 1 hora em segundos,
# sendo o resultado o numero de horas, alem de adicionar na lista
horario.append(int(segundos_a_converter/3600))
# apos, faz a subtracao dos segundos pela quantidade de horas multiplicado
# pelo seu valor em segundos
segundos_a_converter = segundos_a_converter - (3600*horario[0])
# realiza a mesma coisa com minutos
horario.append(int(segundos_a_converter/60))
# depois de subtrair os minutos adiciona os segundos a lista
horario.append(int(segundos_a_converter - (60*horario[1])))
# cria um laço para checar os digitos dos valores,
for index, h in enumerate(horario):
    # se for apenas 1 digito, converte para str e
    # adiciona 0 a esquerda do valor, bem como adiciona o novo valor a lista
    if len(str(h)) < 2:
        horario[index] = '0'+str(h)
# print da lista
print(f'{horario[0]}:{horario[1]}:{horario[2]}')
