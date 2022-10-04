value = input("Insira algum valor: ")
fizzbuzz: list = ["Fizz", "Buzz", "FizzBuzz"]
for output in range(1, int(value) + 1):
    if (output % 5 == 0) and (output % 3 == 0): 
        print(fizzbuzz[2])
        continue
    elif output % 3 == 0:
        print(fizzbuzz[0])
        continue
    elif output % 5 == 0:
        print(fizzbuzz[1])
    print(output)
