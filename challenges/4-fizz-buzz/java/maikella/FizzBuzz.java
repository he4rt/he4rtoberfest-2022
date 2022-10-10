import java.util.Scanner;

public class FizzBuzz {
   public static void main(String[] args) {
      fizzBuzz();
   }

   private static void fizzBuzz(){

      Scanner s = new Scanner(System.in);

      System.out.println("Entre com um número: ");
      int num = s.nextInt();

      for (int i = 1; i <= num; i++) {

         if(i % 3 == 0 && i % 5 == 0){
            System.out.println("FizzBuzz");
         }else if(i % 3 == 0){
            System.out.println("Fizz");
         }else if(i % 5 == 0){
            System.out.println("Buzz");
         }else {
            System.out.println(i);

         }
      }
   }
}
