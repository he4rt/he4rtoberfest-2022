import java.util.Scanner;

public class IdadeEmDias {
    public static void main(String[] args) {
    	
    	Scanner sc = new Scanner(System.in);
    	
        int daysPerYear = 365;
        int daysPerMonth = 30;    	      

        System.out.printf("Digite aqui sua Idade em Dias: ");
        int age = sc.nextInt();

        int years = age / daysPerYear;
        int month = (age % daysPerYear) / daysPerMonth;
        int days = (age % daysPerYear) % daysPerMonth;
        
        System.out.println(years + " ano(s)\n" + month + " mes(es)\n" + days + " dia(s)");

        sc.close();
    }
}
