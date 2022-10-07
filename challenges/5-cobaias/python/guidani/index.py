def numero_total_de_cobaias(dicio):
    total = 0
    for valor in dicio.values():
        total += valor
    return total


def numero_total_por_cobaia(dicio):
    coelhos, ratos, sapos = dicio['C'], dicio['R'], dicio['S']
    return coelhos, ratos, sapos


def percentual_por_cobaia(dicio, total_animal):
    total_de_cobaias = numero_total_de_cobaias(dicio)
    r = (total_animal * 100) / total_de_cobaias
    return r


def main():
    for i in range(numero_de_testes):
        qtd_cobaias, tipo_cobaia = input('Teste: ').split()
        # Verifica se o tipo de cobaia existe no dicionario e atualiza o valor caso exista
        if(tipo_cobaia in dados):
            # print(f'Esse tipo de cobaia ja foi adicionado e a quantidade atual é {dados[tipo_cobaia]}')
            dados.update({tipo_cobaia: dados[tipo_cobaia] + int(qtd_cobaias)})
        else:
            # adicionar ao dicionário caso o item ainda não exista nele
            dados.update({tipo_cobaia: int(qtd_cobaias)})


if __name__ == "__main__":
    dados = {}
    numero_de_testes = int(input("Numero de testes: "))
    main()
    coelho, rato, sapo = numero_total_por_cobaia(dados)
    print(f'Total: {numero_total_de_cobaias(dados)} cobaias')
    print(f'Total de coelhos: {coelho}')
    print(f'Total de ratos: {rato}')
    print(f'Total de sapos: {sapo}')
    print(f'Percentual de coelhos: {percentual_por_cobaia(dados, coelho):.2f} %')
    print(f'Percentual de coelhos: {percentual_por_cobaia(dados, rato):.2f} %')
    print(f'Percentual de coelhos: {percentual_por_cobaia(dados, sapo):.2f} %')