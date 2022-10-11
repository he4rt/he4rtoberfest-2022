import java.util.Scanner;

public class Produto {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o primeiro numero: ");
        int primeiroNumero = scanner.nextInt();

        System.out.print("Digite o segundo numero: ");
        int segundoNumero = scanner.nextInt();

        System.out.println("Produto = " + primeiroNumero * segundoNumero);

        scanner.close();
    }
}