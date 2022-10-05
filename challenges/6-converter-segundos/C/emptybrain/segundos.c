#include "stdio.h"

int main() {
  printf("Digite os segundos: ");
  int seconds;
  scanf("%d", &seconds);
  int hour = seconds / 3600;
  int minutes = (seconds - hour * 3600) / 60;
  seconds = seconds - hour * 3600 - minutes * 60;
  printf("%d:%d:%d \n", hour, minutes, seconds);
}
