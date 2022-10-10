from sys import argv


def fizz_buzz(r: int) -> None:
    for i in range(1, r + 1):
        match i:
            case _ if (i % 5) == 0 and (i % 3) == 0:
                print("FizzBuzz")
                continue
            case _ if (i % 5) == 0:
                print("Buzz")
                continue
            case _ if (i % 3) == 0:
                print("Fizz")
                continue
        print(i)


if __name__ == "__main__":
    fizz_buzz(int(argv[1]))
