from sys import argv


def days_to_years(days: int) -> None:

    years: int = days // 365
    days: int = days % 365

    months: int = days // 30
    days: int = days % 30

    print(f"{years} ano(s)\n{months} mes(es)\n{days} dia(s)")


if __name__ == "__main__":
    days_to_years(int(argv[1]))
