
def fizzbuzz(number1):

    response = ""

    if not number1 % 3:
        response += 'Fizz'

    if not number1 % 5:
        response += "Buzz"

    if not response:
        response = number1

    return response

number1 = int(input("Enter the first number:"))
number2 = int(input("Enter the second number:"))

for i in range(1,number1+1):
    print(fizzbuzz(i))

print('\n')

for i in range(1,number2+1):
    print(fizzbuzz(i))