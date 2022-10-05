from sys import argv

def fizzbuzz(last_number):
    for number in range(1, last_number + 1):
        if number % 3 == 0 and number % 5 == 0:
            print("FizzBuzz")
        elif number % 3 == 0:
            print("Fizz")
        elif number % 5 == 0:
            print("Buzz")
        else:
            print(number)


def main(*args):
    _, *numbers = args

    for number in numbers:
        fizzbuzz(int(number))
        print("\n")


if __name__ == "__main__":
    main(*argv)