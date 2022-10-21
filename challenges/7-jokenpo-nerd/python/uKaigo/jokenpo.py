beats = {
    'pedra': ('tesoura', 'lagarto'),
    'papel': ('pedra', 'spock'),
    'tesoura': ('papel', 'lagarto'),
    'lagarto': ('papel', 'spock'),
    'spock': ('tesoura', 'pedra'),
}

results = []

count = int(input('Nº casos: '))

for _ in range(count):
    rajesh, sheldon = input('Escolhas: ').lower().split()
    if rajesh == sheldon:
        results.append('empate')
    elif sheldon in beats[rajesh]:
        results.append('rajesh')
    elif rajesh in beats[sheldon]:
        results.append('sheldon')
    else:
        raise RuntimeError('Caso impossível.')

print()
print('\n'.join(results))
