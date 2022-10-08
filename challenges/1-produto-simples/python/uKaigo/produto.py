while True:
    try:
        a = int(input('Digite o primeiro número: '))
        b = int(input('Digite o segundo número: '))

        result = a * b
        print()
        print(f'Produto: {result}')
        break
    except ValueError:
        print('Número inválido. Tente novamente.')
