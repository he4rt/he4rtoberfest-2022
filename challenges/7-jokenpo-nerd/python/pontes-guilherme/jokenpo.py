from sys import argv

result = ["empate", "rajesh", "sheldon"]

key_wins_over_values = {
    "tesoura": ["papel", "lagarto"],
    "papel": ["pedra", "spock"],
    "pedra": ["lagarto", "tesoura"],
    "lagarto": ["spock", "papel"],
    "spock": ["tesoura", "pedra"],
}

def get_plays():
    plays = input("Digite 2 jogadas separadas por espaço (exemplo: tesoura spock): ")
    return plays.split(" ")

def get_winner(play1, play2):
    if play1 == play2: return 0
    if play2 in key_wins_over_values[play1]: return 1
    return 2

def get_winner_label(play1, play2):
    return result[get_winner(play1, play2)]

def main(*args):
    _, rounds = args

    for round in range(int(rounds)):
        rajs_play, sheldons_play = get_plays()
        
        winner = get_winner_label(rajs_play, sheldons_play)

        print(winner)

        print("\n")


if __name__ == "__main__":
    main(*argv)