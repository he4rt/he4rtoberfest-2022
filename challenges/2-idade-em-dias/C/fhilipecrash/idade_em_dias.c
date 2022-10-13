#include <stdio.h>
#include <stdlib.h>

int main()
{
    int age;
    scanf("%d", &age);

    int years = age / 365;
    int months = (age % 365) / 30;
    int days = (age % 365) % 30;

    printf("%d ano(s)\n%d mes(es)\n%d dia(s)\n", years, months, days);
    return 0;
}