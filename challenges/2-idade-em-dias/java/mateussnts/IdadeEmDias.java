import java.util.Scanner;

public class IdadeEmDias {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.printf("Digite aqui sua Idade em Dias: ");
        int idade = sc.nextInt();

        int anos = idade / 365;
        int meses = (idade % 365) / 30;
        int dias = (idade % 365) % 30;

        System.out.println("\nResultados: ");
        System.out.println(anos + " ano(s)");
        System.out.println(meses + " mes(es)");
        System.out.println(dias + " dia(s)");

        sc.close();
    }
}
