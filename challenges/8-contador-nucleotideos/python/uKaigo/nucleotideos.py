import sys
from collections import Counter

nucleotides = 'acgt'

sequence = input('Sequência DNA: ').lower()
print()

if any(n for n in sequence if n not in nucleotides):
    print('Sequência de DNA inválida')
    sys.exit(1)

counter = Counter(sequence)
sorted_results = sorted(counter.items(), key=lambda n: nucleotides.index(n[0]))

print(', '.join(f"'{n.upper()}': {c}" for n, c in sorted_results))
