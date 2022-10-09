def calc_produto(value1, value2):
    '''
    Função Calcula produto
    Exemplo: calc_produto(10,3)
    output: 30
    '''
    return value1 * value2

print("Desafio #1")
try:
    first_value = int(input("Digite o primeiro valor: "))
    second_value = int(input("Digite o segundo valor: "))

    PROD = calc_produto(first_value, second_value)
    print(f'Produto: {PROD}')
except:
    print("Erro: Digite somente valores numéricos inteiros.")
