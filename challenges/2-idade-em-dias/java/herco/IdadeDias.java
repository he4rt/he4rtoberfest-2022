import java.util.Scanner;

public class IdadeDias {
    final static int ANO = 365;
    final static int MES = 30;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Entre com sua idade em dias: ");
        int idadeEmDias = scanner.nextInt();

        int anos = idadeEmDias / ANO;
        int meses = (idadeEmDias % ANO) / MES;
        int dias = (idadeEmDias % ANO) % MES;

        System.out.println(anos + " ano(s)");
        System.out.println(meses + " mes(es)");
        System.out.println(dias + " dia(as)");

        scanner.close();
    }
}