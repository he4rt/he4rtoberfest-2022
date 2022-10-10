from sys import argv
from dataclasses import dataclass


@dataclass
class Animals:
    rabbit: int = 0
    rat: int = 0
    frog: int = 0
    total: int = 0


def labs(r: int) -> None:
    animals = Animals()
    for _ in range(r):
        experiment: list[str] = input().split(sep=" ")
        match experiment[1].lower():
            case "c" if int(experiment[0]) in range(1, 16):
                animals.rabbit += int(experiment[0])
            case "r" if int(experiment[0]) in range(1, 16):
                animals.rat += int(experiment[0])
            case "s" if int(experiment[0]) in range(1, 16):
                animals.frog += int(experiment[0])
    animals.total = animals.rabbit + animals.rat + animals.frog

    print(
        f"Total: {animals.total} cobaias\n"
        f"Total de coelhos: {animals.rabbit}\nTotal de ratos: {animals.rat}\n"
        f"Total de sapos: {animals.frog}\nPercentual de coelhos: "
        f"{((animals.rabbit/animals.total) * 100):.2f} %\n"
        f"Percentual de ratos: {((animals.rat/animals.total) * 100):.2f} %\n"
        f"Percentual de sapos: {((animals.frog/animals.total) * 100):.2f} %"
    )


if __name__ == "__main__":
    labs(int(argv[1]))