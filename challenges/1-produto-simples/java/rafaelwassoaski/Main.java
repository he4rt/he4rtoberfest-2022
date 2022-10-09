import java.util.Scanner;
import java.util.InputMismatchException;

public class Main {
    public static void main(String[] args) {
        int a, b;
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Informe o valor de A: ");
            a = scanner.nextInt();

            System.out.print("Informe o valor de B: ");
            b = scanner.nextInt();

            int prod = a * b;

            System.out.print("produto: " + prod);
        } catch (InputMismatchException exception) {
            System.out.println("Valor inválido, tente novamente");
            scanner.nextLine();
        }
    }
}
