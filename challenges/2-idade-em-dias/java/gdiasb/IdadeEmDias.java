import java.util.Scanner;

public class IdadeEmDias {

  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    System.out.println("Digite sua idade em dias: ");
    int idadeDias = scanner.nextInt();
    scanner.close();

    int diasDoAno = 365;
    int diasDoMes = 30;

    int quantidadeAnos = idadeDias / diasDoAno;
    int quantidadeMeses = (idadeDias % diasDoAno) / diasDoMes;
    int quantidadeDias = ((idadeDias % diasDoAno) % diasDoMes);

    System.out.println(quantidadeAnos + " ano(s), " + quantidadeMeses + " mes(es) e " + quantidadeDias + " dia(s)");

  }
}
