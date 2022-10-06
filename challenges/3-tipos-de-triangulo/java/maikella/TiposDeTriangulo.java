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

      System.out.println("Entre com o lado A, B e C:");
      Double sides[] = {s.nextDouble(), s.nextDouble(), s.nextDouble()};
      Arrays.sort(sides, Collections.reverseOrder());

      System.out.print("Entrada: ");
      for(double side: sides) {
         System.out.print(side+ " ");
      }
      System.out.println();

      checkTriangulo(sides);

   }

   private static void checkTriangulo(Double[] sides){

      double ladoA = sides[0];
      double ladoB = sides[1];
      double ladoC = sides[2];

      if(ladoA >= (ladoB+ladoC)){
         System.out.println("NAO FORMA TRIANGULO");
      }else{

         if(pow(ladoA, 2) == pow(ladoB, 2) + pow(ladoC, 2)){
            System.out.println("TRIANGULO RETANGULO");
         }

         if(pow(ladoA, 2) > pow(ladoB, 2) + pow(ladoC, 2)){
            System.out.println("TRIANGULO OBTUSANGULO");
         }

         if(pow(ladoA, 2) < pow(ladoB, 2) + pow(ladoC, 2)){
            System.out.println("TRIANGULO ACUTANGULO");
         }

         if(ladoA == ladoB && ladoB == ladoC){
            System.out.println("TRIANGULO EQUILATERO");
         }else if(ladoA == ladoB || ladoB == ladoC || ladoC == ladoA){
            System.out.println("TRIANGULO ISOSCELES");
         }

      }

   }
}
