#!/bin/sh

A_SIDE_FLOAT=$1
B_SIDE_FLOAT=$2
C_SIDE_FLOAT=$3

A_SIDE_INT=${A_SIDE_FLOAT%.*}
B_SIDE_INT=${B_SIDE_FLOAT%.*}
C_SIDE_INT=${C_SIDE_FLOAT%.*}

if [ $A_SIDE_INT -ge $(( $B_SIDE_INT + $C_SIDE_INT )) ]; then
    echo "NAO FORMA TRIANGULO"
elif then
  if [ $(( $A_SIDE_INT * $A_SIDE_INT )) -eq $(( $B_SIDE_INT * $B_SIDE_INT + $C_SIDE_INT * $C_SIDE_INT )) ]; then
      echo "TRIANGULO RETANGULO"
  fi

  if [ $(( $A_SIDE_INT * $A_SIDE_INT )) -gt $(( $B_SIDE_INT * $B_SIDE_INT + $C_SIDE_INT * $C_SIDE_INT )) ]; then
      echo "TRIANGULO OBTUSANGULO"
  fi

  if [ $(( $A_SIDE_INT * $A_SIDE_INT )) -lt $(( $B_SIDE_INT * $B_SIDE_INT + $C_SIDE_INT * $C_SIDE_INT )) ]; then
      echo "TRIANGULO ACUTANGULO"
  fi

  if [ $A_SIDE_INT -eq $B_SIDE_INT ] && [ $A_SIDE_INT -eq $C_SIDE_INT ]; then
      echo "TRIANGULO EQUILATERO"
  fi

  if [ $A_SIDE_INT -eq $B_SIDE_INT ] && [ $A_SIDE_INT -ne $C_SIDE_INT ]; then
      echo "TRIANGULO ISOSCELES"
  fi

  if [ $A_SIDE_INT -eq $C_SIDE_INT ] && [ $A_SIDE_INT -ne $B_SIDE_INT ]; then
      echo "TRIANGULO ISOSCELES"
  fi

  if [ $B_SIDE_INT -eq $C_SIDE_INT ] && [ $A_SIDE_INT -ne $B_SIDE_INT ]; then
      echo "TRIANGULO ISOSCELES"
  fi
fi
