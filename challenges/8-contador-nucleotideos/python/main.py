import re


def valid_dna_sequence(dna_sequence: str):
    if dna_sequence.__len__() == 0:
        return False
    pattern = "^[ACGT]*$"
    result = bool(re.match(pattern, dna_sequence))
    return result


def count_nucleo(dna_sequence: str):
    dna_sequence = dna_sequence.upper()
    if valid_dna_sequence(dna_sequence):
        count_a = dna_sequence.count('A')
        count_c = dna_sequence.count('C')
        count_g = dna_sequence.count('G')
        count_t = dna_sequence.count('T')
        print(f'{count_a} {count_c} {count_g} {count_t}')
    else:
        print("Sequência de DNA inválida")


if __name__ == '__main__':
    dna_sequence = input()
    count_nucleo(dna_sequence)

