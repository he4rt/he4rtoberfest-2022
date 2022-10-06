#!/bin/sh

A_SIDE_FLOAT=$1
B_SIDE_FLOAT=$2
C_SIDE_FLOAT=$3
A_SIDE_INT=$(echo "$A_SIDE_FLOAT * 100" | bc)
B_SIDE_INT=$(echo "$B_SIDE_FLOAT * 100" | bc)
C_SIDE_INT=$(echo "$C_SIDE_FLOAT * 100" | bc)
A_SIDE_INT=$(echo "$A_SIDE_INT / 100" | bc)
B_SIDE_INT=$(echo "$B_SIDE_INT / 100" | bc)
C_SIDE_INT=$(echo "$C_SIDE_INT / 100" | bc)

if [ $A_SIDE_INT -gt $B_SIDE_INT ] && [ $A_SIDE_INT -gt $C_SIDE_INT ]; then
    if [ $B_SIDE_INT -gt $C_SIDE_INT ]; then
        A_SIDE=$A_SIDE_INT
        B_SIDE=$B_SIDE_INT
        C_SIDE=$C_SIDE_INT
    else
        A_SIDE=$A_SIDE_INT
        B_SIDE=$C_SIDE_INT
        C_SIDE=$B_SIDE_INT
    fi
elif [ $B_SIDE_INT -gt $A_SIDE_INT ] && [ $B_SIDE_INT -gt $C_SIDE_INT ]; then
    if [ $A_SIDE_INT -gt $C_SIDE_INT ]; then
        A_SIDE=$B_SIDE_INT
        B_SIDE=$A_SIDE_INT
        C_SIDE=$C_SIDE_INT
    else
        A_SIDE=$B_SIDE_INT
        B_SIDE=$C_SIDE_INT
        C_SIDE=$A_SIDE_INT
    fi
elif [ $C_SIDE_INT -gt $A_SIDE_INT ] && [ $C_SIDE_INT -gt $B_SIDE_INT ]; then
    if [ $A_SIDE_INT -gt $B_SIDE_INT ]; then
        A_SIDE=$C_SIDE_INT
        B_SIDE=$A_SIDE_INT
        C_SIDE=$B_SIDE_INT
    else
        A_SIDE=$C_SIDE_INT
        B_SIDE=$B_SIDE_INT
        C_SIDE=$A_SIDE_INT
    fi
fi


if [ $A_SIDE -ge $(( $B_SIDE + $C_SIDE )) ]; then
    echo "NAO FORMA TRIANGULO"
elif; then
  if [ $(( $A_SIDE * $A_SIDE )) -eq $(( $B_SIDE * $B_SIDE + $C_SIDE * $C_SIDE )) ]; then
      echo "TRIANGULO RETANGULO"
  fi

  if [ $(( $A_SIDE * $A_SIDE )) -gt $(( $B_SIDE * $B_SIDE + $C_SIDE * $C_SIDE )) ]; then
      echo "TRIANGULO OBTUSANGULO"
  fi

  if [ $(( $A_SIDE * $A_SIDE )) -lt $(( $B_SIDE * $B_SIDE + $C_SIDE * $C_SIDE )) ]; then
      echo "TRIANGULO ACUTANGULO"
  fi

  if [ $A_SIDE -eq $B_SIDE ] && [ $A_SIDE -eq $C_SIDE ]; then
      echo "TRIANGULO EQUILATERO"
  fi

  if [ $A_SIDE -eq $B_SIDE ] && [ $A_SIDE -ne $C_SIDE ]; then
      echo "TRIANGULO ISOSCELES"
  fi

  if [ $A_SIDE -eq $C_SIDE ] && [ $A_SIDE -ne $B_SIDE ]; then
      echo "TRIANGULO ISOSCELES"
  fi

  if [ $B_SIDE -eq $C_SIDE ] && [ $A_SIDE -ne $B_SIDE ]; then
      echo "TRIANGULO ISOSCELES"
  fi
fi
