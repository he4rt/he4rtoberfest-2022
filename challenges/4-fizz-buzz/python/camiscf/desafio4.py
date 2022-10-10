# divisivel por 3 -> fizz
# multiplo de 5 -> buzz
# divisivel de 3 e 5 -> fizzbuzz

def fizzbuzz(n):
    if n % 3 == 0 and n % 5 == 0:
        return 'Fizzbuzz'
    elif n % 3 == 0:
        return 'Fizz'
    elif n % 5 == 0:
        return 'Buzz'
    else:
        return n

if __name__ == '__main__':
    n = int(input())
    for i in range(1, n+1):
        print(fizzbuzz(i))
