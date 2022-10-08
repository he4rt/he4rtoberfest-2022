from sys import argv


def triangulo(medidas: list[float, float, float]) -> str:
    """
    Determina o tipo de triângulo com base em suas medidas.

    args:
        medidas: Lista de medidas dos lados do triângulo.

    return:
        Tipo de triângulo.
    """
    lado_a, lado_b, lado_c = sorted(medidas, reverse=True)

    if lado_a >= lado_b + lado_c:
        return 'NAO FORMA TRIANGULO'
        
    tipo_triangulo = ''
    hipotenusa_ao_quadrado = lado_a**2
    soma_dos_catetos_ao_quadrado = lado_b**2 + lado_c**2

    if hipotenusa_ao_quadrado == soma_dos_catetos_ao_quadrado:
        tipo_triangulo += 'TRIANGULO RETANGULO\n'
    elif hipotenusa_ao_quadrado > soma_dos_catetos_ao_quadrado:
        tipo_triangulo += 'TRIANGULO OBTUSANGULO\n'
    else:
        tipo_triangulo += 'TRIANGULO ACUTANGULO\n'
        
    if lado_a == lado_b == lado_c:
        tipo_triangulo += 'TRIANGULO EQUILATERO'
        return tipo_triangulo
    if lado_a == lado_b or lado_a == lado_c or lado_b == lado_c:
        tipo_triangulo += 'TRIANGULO ISOSCELES'
        return tipo_triangulo


if __name__ == "__main__":
    medidas = (float(value) for value in argv[-3:])
    print(triangulo(medidas))