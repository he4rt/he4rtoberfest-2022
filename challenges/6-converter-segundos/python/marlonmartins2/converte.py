def formatter(number):
    if number >= 10:
        return str(number)
    return f'0{number}'


def convert_seconds(seconds):
    hours = seconds // 3600
    seconds %= 3600
    minutes = seconds // 60
    seconds %= 60
    return f'{formatter(hours)}:{formatter(minutes)}:{formatter(seconds)}'


if __name__ == '__main__':
    seconds = int(input('Enter seconds to convert: '))
    print(convert_seconds(seconds))