def calcula_idade(dias):
    anos = dias // 365
    meses = (dias % 365) // 30
    dias = (dias % 365) % 30
    return f"""
        {anos} ano(s)
        {meses} mes(es)
        {dias} dia(s)
    """

if __name__ == "__main__":
    dias = int(input("Digite a quantidade de dias: "))
    print(calcula_idade(dias))