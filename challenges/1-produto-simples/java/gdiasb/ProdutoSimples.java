import java.util.Scanner;

public class ProdutoSimples {

  public static void main(String[] args) {
    
    Scanner scanner = new Scanner(System.in);

    System.out.println("Digite o primeiro valor: ");
    double firstArg = scanner.nextDouble();

    System.out.println("Digite o segundo valor: ");
    double secondArg = scanner.nextDouble();

    double product = firstArg*secondArg;
    System.out.println("O produto é " + product);

  }
}
