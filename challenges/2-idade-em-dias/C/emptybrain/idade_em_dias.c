#include "stdio.h"

int main() {
  printf("Digite os dias: ");
  int n_days;
  scanf("%d", &n_days);
  int anos = (n_days) / 365;
  int meses = (n_days % 365) / 30;
  int dias = (n_days % 365) % 30;
  printf("\n ano(s): %d \n mes(es): %d \n dia(s): %d \n", anos, meses, dias);
}
