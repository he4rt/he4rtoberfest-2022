import java.util.Scanner;

public class IdadeEmDias {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        System.out.print("Digite sua idade em dias: ");
        int dias = scan.nextInt();

        int ano = 365;
        int meses = 30;

        int qtdAno = dias/ano;
        int qtdMeses = (dias % ano)/meses;
        int qtdDias = (dias % ano) % meses;

        System.out.println(qtdAno + " anos(s)");
        System.out.println(qtdMeses + " mes(es)");
        System.out.println(qtdDias + " dia(s)");
    }
}
