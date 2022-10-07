import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;
import static java.lang.Math.pow;

public class TiposDeTriangulo {
   public static void main(String[] args) {
      start();
   }

   private static void start (){

      Scanner s = new Scanner(System.in);

      System.out.println("Entre com o lado A, B e C: ");
      Double sides[] = {s.nextDouble(), s.nextDouble(), s.nextDouble()};
      Arrays.sort(sides, Collections.reverseOrder());

      System.out.print("Entrada: ");
      for(double side: sides) {
         System.out.print(side + " ");
      }
      System.out.println();

      checkTriangulo(sides);

   }

   private static void checkTriangulo(Double[] sides){

      double sideA = sides[0];
      double sideB = sides[1];
      double sideC = sides[2];

      if (sideA >= (sideB + sideC)){
         System.out.println("NAO FORMA TRIANGULO");
      } else {

         if(pow(sideA, 2) == pow(sideB, 2) + pow(sideC, 2)){
            System.out.println("TRIANGULO RETANGULO");
         }

         if(pow(sideA, 2) > pow(sideB, 2) + pow(sideC, 2)){
            System.out.println("TRIANGULO OBTUSANGULO");
         }

         if(pow(sideA, 2) < pow(sideB, 2) + pow(sideC, 2)){
            System.out.println("TRIANGULO ACUTANGULO");
         }

         if(sideA == sideB && sideB == sideC){
            System.out.println("TRIANGULO EQUILATERO");
         }else if(sideA == sideB || sideB == sideC || sideC == sideA){
            System.out.println("TRIANGULO ISOSCELES");
         }

      }
   }
}