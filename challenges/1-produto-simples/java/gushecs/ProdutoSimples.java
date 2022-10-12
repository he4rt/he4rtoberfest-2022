import java.text.DecimalFormat;
import java.util.InputMismatchException;
import java.util.Scanner;

public class ProdutoSimples {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        boolean inputLoopingVar = true;
        double value1 = 0.0;
        double value2 = 0.0;

        System.out.println("Este programa irá lhe pedir dois valores e devolver o produto entre eles.");
        System.out.println();

        while (inputLoopingVar) {
            try {
                System.out.print("Digite o primeiro valor do produto: ");
                value1 = scanner.nextDouble();
                inputLoopingVar = false;
            } catch (InputMismatchException e) {
                System.out.println();
                System.out.println("Valor inválido! o valor fornecido deve ser numérico.");
                scanner.next();
            }
        }

        inputLoopingVar = true;

        while (inputLoopingVar) {
            try {
                System.out.print("Digite o segundo valor do produto: ");
                value2 = scanner.nextDouble();
                inputLoopingVar = false;
            } catch (InputMismatchException e) {
                System.out.println();
                System.out.println("Valor inválido! o valor fornecido deve ser numérico.");
                scanner.next();
            }
        }

        System.out.println();
        DecimalFormat format = new DecimalFormat("0.#");
        System.out.println("produto: " + format.format(value1 * value2));

    }

}
