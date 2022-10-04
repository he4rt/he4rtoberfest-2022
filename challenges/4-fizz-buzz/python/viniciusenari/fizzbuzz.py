def fizzbuzz(n: int):
    for i in range(1, n + 1):
        print("Fizz" * (i % 3 == 0) + "Buzz" * (i % 5 == 0) or str(i))

if __name__ == '__main__':
    n = int(input("Enter a number: "))
    fizzbuzz(n)