import random

print('''Escolha uma opção:
[ 1 ] Pedra
[ 2 ] Papel
[ 3 ] Tesoura
[ 4 ] Spock
[ 5 ] Lagarto''')
opcao = int(input('Sua escolha:'))

[Pedra] = [1]
[Papel] = [2]
[Tesoura] = [3]
[Spock] = [4]
[Lagarto] = [5]

escolha = random.choice([1, 2, 3, 4, 5])

print('Minha escolha: {}'.format(escolha))

if escolha == 1 and opcao == 2:
    print('Papel embrulha a pedra, você ganhou!')
elif escolha == 2 and opcao == 1:
    print('Papel embrulha a pedra, você perdeu!')
elif escolha == 2 and opcao == 3:
    print('Tesoura corta o papel, você venceu!')
elif escolha == 3 and opcao == 2:
    print('Tesoura corta o papel, você perdeu!')
elif escolha == 1 and opcao == 3:
    print('Pedra quebra a tesoura, você perdeu!')
elif escolha == 3 and opcao == 1:
    print('Pedra quebra a tesoura, você venceu!')
elif escolha == 1 and opcao == 5:
    print("Pedra derruba lagarto, você perdeu!")
elif escolha == 5 and opcao == 1:
    print("Pedra derruba lagarto, você ganhou!")
elif escolha == 5 and opcao == 4:
    print("Lagarto adormece Spock, você perdeu!")
elif escolha == 4 and opcao == 5:
    print("Lagarto adormece Spock, você venceu!")
elif escolha == 4 and opcao == 3:
    print("Spock derrete tesoura, você perdeu!")
elif escolha == 3 and opcao == 4:
    print("Spock derrete tesoura, você venceu!")
elif escolha == 3 and opcao == 5:
    print("Tesoura prende lagarto, você perdeu!")
elif escolha == 5 and opcao == 3:
    print("Tesoura prende lagarto, você venceu!")
elif escolha == 5 and opcao == 2:
    print("Lagarto come papel, você perdeu!")
elif escolha == 2 and opcao == 5:
    print("Lagarto come papel, você venceu!")
elif escolha == 2 and opcao == 4:
    print("Papel refuta Spock, você perdeu!")
elif escolha == 4 and opcao == 2:
    print("Papel refuta Spock, você venceu!")
elif escolha == 4 and opcao == 1:
    print("Spock vaporiza pedra, você perdeu!")
elif escolha == 1 and opcao == 4:
    print("Spock vaporiza pedra, você venceu!")
else:
    print('Nós escolhemos a mesma opção, empatamos!')