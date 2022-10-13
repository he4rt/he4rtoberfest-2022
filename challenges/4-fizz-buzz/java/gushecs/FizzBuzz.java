import java.util.InputMismatchException;
import java.util.Scanner;

public class FizzBuzz {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        boolean inputLoop = true;
        int finalNumber = 0;

        System.out.println("Este programa ira pedir um número inteiro. Em seguida, imprimira todos os números inteiros " +
                "de 1 ate o valor fornecido, sendo que:\n\n - Numeros multiplos de 3 serao substituidos pela palavra Fizz;\n" +
                " - Numeros multiplos de 5 serao substituidos pela palavra Buzz;\n - Numeros multiplos tanto de 3 quanto de 5 " +
                "serao substituidos por FizzBuzz.");
        System.out.println();

        while (inputLoop) {
            try {
                System.out.print("Digite um número: ");
                finalNumber = scanner.nextInt();
                if (finalNumber == 0) throw new InputMismatchException("zero");
                inputLoop = false;
            } catch (InputMismatchException e) {
                System.out.println("Valor inválido! São aceitos apenas números inteiros e diferentes de 0.");
                System.out.println();
                if (e.getMessage() == null) scanner.next();
            }
        }

        System.out.println();

        for (int numberToPrint = 1; numberToPrint <= finalNumber; numberToPrint++) {
            if (numberToPrint % 3 == 0) System.out.println(numberToPrint % 5 == 0 ? "FizzBuzz" : "Fizz");
            else if (numberToPrint % 5 == 0) System.out.println("Buzz");
            else System.out.println(numberToPrint);
        }

    }

}
