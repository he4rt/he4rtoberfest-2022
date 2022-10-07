import java.util.Scanner;

public class IdadeEmDias {

   public static void main(String[] args) {
   
   Scanner s = new Scanner(System.in);
   
   System.out.println("Entre com o dia");
   
      toConvert(s.nextInt());

   }

   private static void toConvert(int day){

      int year = Integer.valueOf(day/365);
      day -= year * 365;
      int month = day/30;
      day -= month * 30;

      System.out.println(year+" ano(s)");
      System.out.println(month+" mes(es)");
      System.out.println(day+" dia(s)");

   }

}
