import java.util.Scanner;

public class ProdutoSimples {

   public static void main(String[] args) {
      result();
   }

   private static void result(){

      Scanner s = new Scanner(System.in);
      System.out.print("Entre com o 1° e 2° número: ");
      int num1 = s.nextInt();
      int num2 = s.nextInt();

      final int PROD = num1*num2;

      System.out.println(PROD);

   }

}
