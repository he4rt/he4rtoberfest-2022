from sys import argv
import time


def seconds_to_hours(sec: float) -> None:
    # está recebendo do tipo float pois gmtime recebe um float.
    print(time.strftime("%H:%M:%S", time.gmtime(sec)))


if __name__ == "__main__":
    seconds_to_hours(float(argv[1]))