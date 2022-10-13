def fizz_buzz(x):
    for i in range(1, x + 1):
        if i % 3 == 0 and i % 5 == 0:
            print('FizzBuzz')
        elif i % 3 == 0 and i % 5 != 0:
            print('Fizz')
        elif i % 5 == 0 and i % 3 != 0:
            print('Buzz')
        else:
            print(str(i))


if __name__ == '__main__':
    try:
        fizz_buzz(int(input('Digite um número: ')))
    except ValueError:
        print('Digite somente números inteiros.')
