
def form(number):
    if number >= 10:
        return str(number)
    return f'0{number}'



def convert_seconds(seconds):

    hours = seconds // 3600

    seconds %= 3600

    minutes = seconds // 60
    
    seconds %= 60

    return f'{form(hours)}:{form(minutes)}:{form(seconds)}'




seconds = int(input('Seconds to Convert: '))

print(convert_seconds(seconds))