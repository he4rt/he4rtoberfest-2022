def produto(a,b):
    return a * b


def main(a, b):
    prod = produto(a, b)
    print(f'Produto: {prod}')
    

if __name__ == "__main__":
    numero_um = int(input('Numero um: '))
    numero_dois = int(input('Numero dois: '))
    main(numero_um, numero_dois)