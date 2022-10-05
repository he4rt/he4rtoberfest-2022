seconds = int(input())


def pad_start(n: int) -> str:
    if n >= 10:
        return str(n)
    return "0" + str(n)


hours = seconds // 3600
seconds -= hours * 3600

minutes = seconds // 60
seconds -= minutes * 60

formated = f"{pad_start(hours)}:{pad_start(minutes)}:{pad_start(seconds)}"

print(formated)
