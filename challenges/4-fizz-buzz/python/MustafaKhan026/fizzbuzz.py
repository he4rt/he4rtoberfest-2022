for i in range(1,100):
    if i % 3 == 0 and i % 5 == 0:
        print('frizzbuzz')
    elif i % 3 == 0:
        print('frizz')
    elif i % 5 ==  0:
        print('buzz')
    else:
        print (i)