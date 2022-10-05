#include "stdio.h"

int main() {
  printf("Digite os segundos: ");
  int seconds;
  scanf("%d", &seconds);
  int hour = seconds / 3600;
  int minutes = (seconds - hour * 3600) / 60;
  seconds = seconds - hour * 3600 - minutes * 60;
  printf("%02d:%02d:%02d \n", hour, minutes, seconds);
  return 0;
}
