public class IdadeEmDias {

   public static void main(String[] args) {
      toConvert(400);
      toConvert(800);
      toConvert(30);

   }

   private static void toConvert(int day){

      int year = Integer.valueOf(day/365);
      day -= year * 365;
      int month = day/30;
      day -= month * 30;

      System.out.println(year+" ano(s)");
      System.out.println(month+" mês(s)");
      System.out.println(day+" dia(s) \n");

   }

}
