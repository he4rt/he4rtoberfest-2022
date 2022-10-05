segundos = int(input('Segundos: '))

hora = segundos // 3600
minuto = (segundos - hora * 3600) // 60
segundo = segundos - hora * 3600 - minuto * 60

print(f'{hora:02d}:{minuto:02d}:{segundo:02d}')