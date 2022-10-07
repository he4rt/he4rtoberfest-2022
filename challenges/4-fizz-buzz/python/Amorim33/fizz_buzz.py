n = int(input())

numbers = [i for i in range(1, n+1)]

print("saída:")
for i in range(len(numbers)):
    if numbers[i] % 3 == 0 and numbers[i] % 5 == 0:
        print("FizzBuzz")
    elif numbers[i] % 3 == 0:
        print("Fizz")
    elif numbers[i] % 5 == 0:
        print("Buzz")
    else:
        print(numbers[i])