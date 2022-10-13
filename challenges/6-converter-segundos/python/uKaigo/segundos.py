seconds = int(input('Tempo em segundos: '))

minutes, seconds = divmod(seconds, 60)
hours, minutes = divmod(minutes, 60)

print(f'{hours:0>2}:{minutes:0>2}:{seconds:0>2}')

