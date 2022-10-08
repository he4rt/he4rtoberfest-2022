import java.util.Scanner;

public class IdadeEmDias{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int value = sc.nextInt();

        int ano = value / 365;
        value -= ano * 365;
        int mes = value / 30;
        value -= mes * 30;
        int dias = value;

        System.out.printf("%d ano(s)%n", ano);
        System.out.printf("%d mês(es)%n", mes);
        System.out.printf("%d dia(s)%n", dias);


        sc.close();
    }
}