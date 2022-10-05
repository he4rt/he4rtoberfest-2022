def convert_seconds(seconds: int) -> str:
    hours = seconds // 3600
    seconds %= 3600
    minutes = seconds // 60
    seconds %= 60
    return f'{hours:02d}:{minutes:02d}:{seconds:02d}'

if __name__ == '__main__':
    seconds = int(input('Enter the number of seconds: '))
    print(convert_seconds(seconds))