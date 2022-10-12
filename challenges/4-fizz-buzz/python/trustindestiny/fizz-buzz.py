x = int(input('Digite um número: '))


def fizzbuzz():
    for n in range(1, x + 1):
        if (n % 3 == 0) and (n % 5 == 0):
            print('fizzbuzz')
            continue
        if (n % 3 == 0):
            print('fizz')
        elif (n % 5 == 0):
            print('buzz')
        else:
            print(n)


fizzbuzz()
