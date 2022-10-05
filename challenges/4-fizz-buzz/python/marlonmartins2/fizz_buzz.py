n = int(input("Enter a number: "))
n2 = int(input("Enter a second number: "))

def fizzbuzz(n):
    response = ""
    if not n % 3:
        response += 'Fizz'
    if not n % 5:
        response += "Buzz"
    if not response:
        response = n
    return response


for i in range(1, n + 1):
    print(fizzbuzz(i))

print('\n')

for i in range(1, n2 + 1):
    print(fizzbuzz(i))