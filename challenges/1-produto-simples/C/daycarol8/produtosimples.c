#include <stdio.h>

int main(void) {

  int num1, num2;
  printf("Digite o primeiro número: ");
  scanf("%d", &num1);

   printf("Digite o segundo número: ");
  scanf("%d", &num2);
  
  int produto = num1 * num2;
  printf("Sua conta: %d x %d = %d",num1,num2,produto);
  return 0;
}