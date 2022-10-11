#include <stdio.h>

int main(void)
{
    int num1, num2;

    printf("digite dois números <n1 n2>: ");
    scanf("%d %d", &num1, &num2);

    int result = num1 * num2;
    printf("produto: %d \n", result);

    return 0;
}
