def tipo_triangulo(a: float, b: float, c: float) -> None:
    if a >= b + c:
        print('NAO FORMA TRIANGULO')
        return

    if a ** 2 == b ** 2 + c ** 2:
        print('TRIANGULO RETANGULO')
    elif a ** 2 > b ** 2 + c ** 2:
        print('TRIANGULO OBTUSANGULO')
    elif a ** 2 < b ** 2 + c ** 2:
        print('TRIANGULO ACUTANGULO')
    
    if a == b == c:
        print('TRIANGULO EQUILATERO')
    elif a == b or c == b:
        print('TRIANGULO ISOSCELES')

if __name__ == '__main__':
    lados = [float(n) for n in  input().split()]
    lados.sort()
    a, b, c = lados[2], lados[1], lados[0]
    tipo_triangulo(a, b, c)