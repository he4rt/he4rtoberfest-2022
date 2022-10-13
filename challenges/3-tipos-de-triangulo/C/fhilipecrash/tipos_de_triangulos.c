#include <stdio.h>
#include <stdlib.h>

int main()
{
    float first_value, second_value, third_value, a, b, c;
    scanf("%f %f %f", &first_value, &second_value, &third_value);

    if (first_value > second_value && first_value > third_value)
    {
        a = first_value;
        if (second_value > third_value)
        {
            b = second_value;
            c = third_value;
        }
        else
        {
            b = third_value;
            c = second_value;
        }
    }
    else if (second_value > first_value && second_value > third_value)
    {
        a = second_value;
        if (first_value > third_value)
        {
            b = first_value;
            c = third_value;
        }
        else
        {
            b = third_value;
            c = first_value;
        }
    }
    else
    {
        a = third_value;
        if (first_value > second_value)
        {
            b = first_value;
            c = second_value;
        }
        else
        {
            b = second_value;
            c = first_value;
        }
    }

    if (a >= b + c)
    {
        printf("NAO FORMA TRIANGULO\n");
        return 0;
    }

    if (a * a == b * b + c * c)
    {
        printf("TRIANGULO RETANGULO\n");
    }
    else if (a * a > b * b + c * c)
    {
        printf("TRIANGULO OBTUSANGULO\n");
    }
    else if (a * a < b * b + c * c)
    {
        printf("TRIANGULO ACUTANGULO\n");
    }

    if (a == b && b == c)
    {
        printf("TRIANGULO EQUILATERO\n");
    }
    else if (a == b || a == c || b == c)
    {
        printf("TRIANGULO ISOSCELES\n");
    }

    return 0;
}