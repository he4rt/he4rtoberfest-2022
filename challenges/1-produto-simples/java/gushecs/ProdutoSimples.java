import java.text.DecimalFormat;
import java.util.InputMismatchException;
import java.util.Scanner;

public class ProdutoSimples {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        boolean inputLoopingVar = true;
        int value1 = 0;
        int value2 = 0;

        System.out.println("Este programa irá lhe pedir dois valores inteiros e devolver o produto entre eles.");
        System.out.println();

        while (inputLoopingVar) {
            try {
                System.out.print("Digite o primeiro valor do produto: ");
                value1 = scanner.nextInt();
                inputLoopingVar = false;
            } catch (InputMismatchException e) {
                System.out.println();
                System.out.println("Valor inválido! o valor fornecido deve ser um número inteiro.");
                scanner.next();
            }
        }

        inputLoopingVar = true;

        while (inputLoopingVar) {
            try {
                System.out.print("Digite o segundo valor do produto: ");
                value2 = scanner.nextInt();
                inputLoopingVar = false;
            } catch (InputMismatchException e) {
                System.out.println();
                System.out.println("Valor inválido! o valor fornecido deve ser um número inteiro.");
                scanner.next();
            }
        }

        System.out.println();
        System.out.println("produto: " + value1 * value2);

    }

}
