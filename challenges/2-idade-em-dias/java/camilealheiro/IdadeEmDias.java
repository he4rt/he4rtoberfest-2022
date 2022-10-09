import java.util.Scanner;

public class IdadeEmDias {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Digite uma quantidade de dias: ");
        int num = sc.nextInt();

        int dias, anos, meses;

        anos = num / 365;
        meses = (num % 365) / 30;
        dias = (num % 365) % 30;

        System.out.printf("%d ano(s)\n%d mes(es)\n%d dia(s)", anos, meses, dias);
    }
}
