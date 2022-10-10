from sys import argv
from dataclasses import dataclass


@dataclass
class Triangle:
    a: float
    b: float
    c: float 


def type_of_triangle(sides: Triangle) -> None:
    if sides.a >= sides.b + sides.c:
        print("NAO FORMA TRIANGULO")
        return
    if sides.a**2 == (sides.b**2 + sides.c**2):
        print("TRIANGULO RETANGULO")
    if sides.a**2 > (sides.b**2 + sides.c**2):
        print("TRIANGULO OBTUSANGULO")
    if sides.a**2 < (sides.b**2 + sides.c**2):
        print("TRIANGULO ACUTANGULO")
    if sides.a == sides.b == sides.c:
        print("TRIANGULO EQUILATERO")
        return
    if sides.b == sides.c or sides.a == sides.b:
        print("TRIANGULO ISOSCELES")


if __name__ == "__main__":
    args: list[float] = [float(arg) for arg in argv[1:4]]
    args: list[float] = sorted(args, reverse=True)
    type_of_triangle(Triangle(a=args[0], b=args[1], c=args[2]))