test_cases = int(input())
animals_list = {"S": 0, "R": 0, "C": 0}

sum_animals = []

for i in range(test_cases):
    current = str(input()).strip().upper()
    sum_animals.append(current.split(" "))


def add_to_current_animal(letter: str, value: int) -> None:
    for k, v in animals_list.items():
        if k == letter:
            animals_list[k] = v + value


def get_percentage(animal: int, total: int) -> str:
    percentage = animal / total * 100
    return "%.2f" % percentage + " %"


for item in sum_animals:
    value = int(item[0])
    animal = item[1]
    add_to_current_animal(animal, value)

total = sum(list(animals_list.values()))

coelhos = animals_list["C"]
ratos = animals_list["R"]
sapos = animals_list["S"]

print(f"Total: {total} cobaias")
print(f"Total de coelhos: {coelhos}")
print(f"Total de ratos: {ratos}")
print(f"Total de sapos: {sapos}")
print(f"Percentual de coelhos: {get_percentage(coelhos, total)}")
print(f"Percentual de ratos: {get_percentage(ratos, total)}")
print(f"Percentual de sapos: {get_percentage(sapos, total)}")
