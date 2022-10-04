while True:
    try:
        x = int(input('[*] - Digite o primeiro número inteiro: '))
        y = int(input('[**] - Digite o segundo número inteiro: '))
        prod = x * y
        print(f'\nProduto: {prod}')
        break
    except ValueError:
        print('Erro: a operação só aceita valores numéricos inteiros, tente novamente.')
        continue
