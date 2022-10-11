import java.util.Scanner;

public class IdadeEmDias {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite sua idade em dias:");
        int dias = sc.nextInt();

        int anos = dias / 365;
        int meses = (dias % 365) / 30;
        int dia = (dias % 365) % 30;

        System.out.print(String.format("%s", anos) + " ano(s)\n" +
                String.format("%s", meses) + " mes(es)\n" +
                String.format("%s", dia) + " dia(s)\n");
        sc.close();
    }
}
