import java.util.InputMismatchException;
import java.util.Scanner;

public class IdadeEmDias {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        boolean inputLoop = true;
        int totalDays = 0;

        System.out.println("Este programa irá pedir um número de dias. Em seguida, devolverá a mesma medida de tempo em anos, meses e dias.");
        System.out.println();

        while (inputLoop) {
            try {
                System.out.print("Digite um número de dias: ");
                totalDays = scanner.nextInt();
                inputLoop = false;
            } catch (InputMismatchException e) {
                System.out.println("Valor inválido! São aceitos apenas números inteiros.");
                System.out.println();
                scanner.next();
            }
        }

        System.out.println();
        System.out.println(totalDays + (totalDays != 1 ? " dias correspondem a:":" dia corresponde a:"));
        System.out.println();


        int years = totalDays / 365;
        System.out.println(years + (years != 1 ? " anos":" ano"));
        totalDays -= 365*years;


        int months = totalDays / 30;
        System.out.println(months + (months != 1 ? " meses":" mês"));
        totalDays -= 30*months;


        System.out.println(totalDays + (totalDays != 1 ? " dias":" dia"));

    }

}
