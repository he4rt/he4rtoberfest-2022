rules = {
    'tesoura': ['papel', 'lagarto'],
    'papel': ['pedra', 'spock'],
    'pedra': ['lagarto', 'tesoura'],
    'lagarto': ['spock', 'papel'],
    'spock': ['tesoura', 'pedra']
}

if __name__ == '__main__':
    rounds = int(input())
    outputs = []
    for _ in range(rounds):
        rajesh, sheldon = input().split()
        if rajesh == sheldon:
            outputs.append('empate')
        elif sheldon in rules[rajesh]:
            outputs.append('rajesh')
        else:
            outputs.append('sheldon')
    print(*outputs, sep='\n')