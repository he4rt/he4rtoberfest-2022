from sys import argv


def prod(num_1: int, num_2: int) -> None:
    print(num_1 * num_2)


if __name__ == "__main__":
    args: list[str] = argv[1:3]
    args: list[int] = [int(arg) for arg in args]
    prod(args[0], args[1])
