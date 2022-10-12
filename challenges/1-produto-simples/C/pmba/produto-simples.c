#include <stdio.h>

int main(void)
{
    int num1, num2;
    printf("digite dois numeros: ");
    scanf("%d %d", &num1, &num2);

    int res = num1 * num2;
    printf("produto: %d\n", res);
    return 0;
}
