from sys import argv

def product(number1, number2):
    return number1 * number2

def main(*args):
    # the first parameter is actually the path to the current script, so i'll throw it away using _
    # the *args in the line below will hold additional parameters, if more than two are used
    _, number1, number2, *args = args 

    PROD = product(int(number1), int(number2))

    print("produto: ", PROD)


if __name__ == "__main__":
    main(*argv)