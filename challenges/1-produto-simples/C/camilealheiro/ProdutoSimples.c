#include <stdio.h>

int main(void) {

  int num1, num2;
  printf("Digite dois inteiros: ");
  scanf("%d %d", &num1, &num2);
  
  int PROD = num1 * num2;
  printf("produto: %d", PROD);
  return 0;
}