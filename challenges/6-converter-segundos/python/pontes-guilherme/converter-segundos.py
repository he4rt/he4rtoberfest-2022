from sys import argv

def seconds_to_hours(seconds):
    hours = seconds//3600
    minutes = (seconds - (hours*3600))//60
    seconds = seconds - (hours*3600) - (minutes*60)

    formatted_hours = str(hours).zfill(2)
    formatted_minutes = str(minutes).zfill(2)
    formatted_seconds = str(seconds).zfill(2)

    return "%s:%s:%s" % (formatted_hours, formatted_minutes, formatted_seconds)


def main(*args):
    _, *numbers = args

    for seconds in numbers:
        print(seconds_to_hours(int(seconds)))
        print("\n")


if __name__ == "__main__":
    main(*argv)