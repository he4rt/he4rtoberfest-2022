game_terms = "tesoura papel pedra lagarto spock tesoura lagarto papel spock pedra tesoura"


test_cases = int(input())
rounds_played = []

for i in range(test_cases):
    inp = str(input()).strip().lower()
    current = inp.split(" ")
    rounds_played.append(current)

for round in rounds_played:
    first = round[0]
    second = round[1]

    if first == second:
        print("empate")
    elif f"{first} {second}" in game_terms:
        print("rajesh")
    elif f"{second} {first}" in game_terms:
        print("sheldon")
    else:
        print("os valores digitados não são válidos")
