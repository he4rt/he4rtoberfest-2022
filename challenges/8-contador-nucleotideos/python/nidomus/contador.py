cont = {'A':0, 'C':0 , 'G':0 , 'T':0}

sequencia = input('Sequência DNA: ')

flag = False

for x in sequencia:
    
    if x not in cont:
        flag = True
        break

    else:
        cont[x] = cont[x] + 1

if not flag:
    print(f"A: {cont['A']}, C: {cont['C']}, G: {cont['G']}, T: {cont['T']}")

else:
    print("Sequência de DNA inválida")
