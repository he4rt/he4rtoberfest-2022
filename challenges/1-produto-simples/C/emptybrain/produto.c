#include "stdio.h"

int PROD[2]; // especifica o tamanho do array

int main(){
  printf("Digite os valores: ");
  scanf("%d %d", &PROD[0], &PROD[1]);
  printf("produto: %d \n", PROD[0] * PROD[1]);
}
