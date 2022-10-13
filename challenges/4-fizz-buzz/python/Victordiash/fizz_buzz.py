x = int(input("insira um valor inteiro:"))

for i in range(1, x +1 ):
    if i % 3 == 0 and i % 5 == 0 :
        print("fizzbuzz")  
    elif i % 3 == 0 :
        print("fizz")
    elif i % 5 == 0:
        print("buzz")
    else:
        print(i)
